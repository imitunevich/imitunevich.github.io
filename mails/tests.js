"use strict";

describe("services", function () {
    beforeEach(module("mails"));

    describe("MailService", function () {

        var objects, obj, arr, baseURL, $httpBackend, dataName, MailService;

        beforeEach(inject(function (_$httpBackend_, _MailService_) {
            objects = {"someid": {"name": "Ivan"}};
            obj = {"name": "Ivan", "id": "someid"};
            arr = [obj];

            baseURL = "https://fiery-inferno-8968.firebaseio.com/";
            dataName = "inbox";

            $httpBackend = _$httpBackend_;
            MailService = _MailService_;

            $httpBackend.whenGET(`${baseURL}${dataName}.json`).respond(objects);
            $httpBackend.whenGET(`${baseURL}${dataName}/someid.json`).respond(obj);
            $httpBackend.whenGET(`${baseURL}folders.json`).respond(objects);
            $httpBackend.whenPOST(`${baseURL}sent.json`, obj).respond("someid");
        }));

        it("should get list of folders", function (done) {
            MailService.getFolders().then(function (data) {
                expect(data).toEqual(arr);
                done();
            });

            $httpBackend.flush();
        });

        it("should get list of mails", function (done) {
            MailService.getMails("inbox").then(function (data) {
                expect(data).toEqual(arr);
                done();
            });

            $httpBackend.flush();
        });

        it("should get data for selected mail", function (done) {
            MailService.getSelectedItem(dataName, "someid").then(function (data) {
                expect(data).toEqual({name: 'Ivan', id: 'someid', folder: 'inbox'});
                done();
            });

            $httpBackend.flush();
        });

        it("should add data", function (done) {
            MailService.sendMail(obj).then(function (newItem) {
                expect(newItem).toEqual(obj);
                done();
            });

            $httpBackend.flush();
        });

    });
});

describe("components", function () {

    var component, scope,
        MailService,
        $componentController,
        folders, mails, mail;

    beforeEach(module("mails"));

    beforeEach(inject(function ($rootScope, _$componentController_, _MailService_) {
        $componentController = _$componentController_;
        scope = $rootScope.$new();
        MailService = _MailService_;
    }));

    describe("component: mailPage", function () {
        beforeEach(inject(function () {
            component = $componentController("mailPage", {$scope: scope});
        }));
        it("should return boolean", function () {
            expect(component.isMailSelected()).toBe(false);
        });
    });

    describe("component: folders", function () {
        beforeEach(inject(function ($q) {
            folders = [{"name": "inbox"}];

            var deferred = $q.defer();
            spyOn(MailService, "getFolders").and.returnValue(deferred.promise);
            deferred.resolve(folders);

            component = $componentController("folders", {$scope: scope});
        }));

        it("should call MailService", function () {
            component.getFolders();
            expect(MailService.getFolders).toHaveBeenCalled();
        });

        it("should set folders", function () {
            component.getFolders();
            scope.$apply();
            expect(component.folders).toEqual(folders);
        })
    });

    describe("component: mailList", function () {
        beforeEach(inject(function ($q) {
            mails = [{"text": "someText1"}, {"text": "someText2", "checked": true}];

            var getMailsDeferred = $q.defer();
            spyOn(MailService, "getMails").and.returnValue(getMailsDeferred.promise);
            getMailsDeferred.resolve(mails);

            var removeArrayDeferred = $q.defer();
            spyOn(MailService, "removeArray").and.returnValue(removeArrayDeferred.promise);
            removeArrayDeferred.resolve(true);

            component = $componentController("mailList", {$scope: scope});
        }));

        it("should assign bindings value to the folderName", function () {
            component = $componentController("mailList", {$scope: scope}, {folderName: "inbox"});
            expect(component.folderName).toBe("inbox");
        });

        it("should call MailService.getMails", function () {
            component.loadMails();
            expect(MailService.getMails).toHaveBeenCalled();
        });

        it("should set mails", function () {
            component.loadMails();
            scope.$apply();
            expect(component.mails).toEqual(mails);
        });

        it("should set selected mail", function () {
            component.setSelectedItem({"text": "someText"});
            expect(MailService.selectedItem).toEqual({"text": "someText"});
        });

        it("should call MailService.removeArray", function () {
            component.items = mails;
            component.remove();
            expect(MailService.removeArray).toHaveBeenCalled();
        });

        it("should remove checked mails", function () {
            component.items = mails;
            component.remove();
            scope.$apply();
            expect(component.items).toEqual([{"text": "someText1"}]);
        })
    });

    describe("component: mailView", function () {
        beforeEach(inject(function ($q) {
            mail = {"text": "someText"};

            var getSelectedDeferred = $q.defer();
            spyOn(MailService, "getSelectedItem").and.returnValue(getSelectedDeferred.promise);
            getSelectedDeferred.resolve(mail);

            var sendMailDeferred = $q.defer();
            spyOn(MailService, "sendMail").and.returnValue(sendMailDeferred.promise);
            sendMailDeferred.resolve();

            component = $componentController("mailView", {$scope: scope}, {mailId: 1});

        }));

        it("should assign bindings value to the mailId", function () {
            expect(component.mailId).toBe(1);
        });

        it("should call MailService.getSelectedItem", function () {
            component.getSelectedItem("inbox", 1);
            expect(MailService.getSelectedItem).toHaveBeenCalled();
        });

        it("should set data for selected mail", function () {
            component.getSelectedItem("inbox", 1);
            scope.$apply();
            expect(component.mail).toEqual(mail);
        });

        it("should set data for selected mail in MailService", function () {
            component.getSelectedItem("inbox", 1);
            scope.$apply();
            expect(MailService.selectedMail).toEqual(mail);
        });

        it("should return boolean", function () {
            expect(component.isNew).toEqual(false);
        });

        it("should call MailService.sendMail", function () {
            component.mail = mail;
            component.sendMail();
            expect(MailService.sendMail).toHaveBeenCalled();
        });

        it("should set selected item in MailService to null", function () {
            component.mail = mail;
            component.sendMail();
            scope.$apply();
            expect(MailService.selectedMail).toEqual(null);
        });
    });
});