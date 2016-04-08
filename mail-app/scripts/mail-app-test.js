describe("services", function () {

    var objects, obj, arr, baseURL, $httpBackend, dataName;

    beforeEach(module("mailApp"));

    beforeEach(function () {
        objects = {"someid": {"name": "Ivan"}};
        obj = {"name": "Ivan", "id": "someid"};
        arr = [obj]
    });

    describe("UtilsService", function () {
        it("should normalize object to array", inject(function (UtilsService) {
            expect(UtilsService.normalizeToArray(objects)).toEqual(arr);
        }));
    });

    beforeEach(inject(function (_$httpBackend_) {
        baseURL = "https://fiery-inferno-8968.firebaseio.com/";
        dataName = "inbox";
        $httpBackend = _$httpBackend_;
        $httpBackend.whenGET(`${baseURL}${dataName}.json`).respond(objects);
        $httpBackend.whenGET(`${baseURL}${dataName}/someid.json`).respond(obj);
    }));

    describe("BaseService", function () {

        var BaseService;

        beforeEach(inject(function (_BaseService_, _UtilsService_) {
            BaseService = _BaseService_;
            BaseService.utilsService = _UtilsService_;
            $httpBackend.whenPOST(`${baseURL}${dataName}.json`, obj).respond("someid");
            $httpBackend.whenPUT(`${baseURL}${dataName}/someid.json`, obj).respond(obj);
            $httpBackend.whenDELETE(`${baseURL}${dataName}/someid.json`).respond(null);

            spyOn(BaseService.utilsService, "normalizeToArray").and.returnValue(arr);
        }));

        it("should get list of data", function (done) {
            BaseService.getData(dataName).then(function (data) {
                expect(data).toEqual(arr);
                done();
            });

            $httpBackend.flush();
        });

        it("should call UtilsService.normalizeToArray", function (done) {
            BaseService.getData(dataName).then(function (data) {
                expect(BaseService.utilsService.normalizeToArray).toHaveBeenCalled();
                done();
            });

            $httpBackend.flush();
        });

        it("should get data for selected item", function (done) {
            BaseService.getSelectedItem(dataName, "someid").then(function (response) {
                expect(response.data).toEqual(obj);
                done();
            });

            $httpBackend.flush();
        });

        it("should add data", function (done) {
            BaseService.add(obj, dataName).then(function (newItem) {
                expect(newItem).toEqual(obj);
                done();
            });

            $httpBackend.flush();
        });

        it("should update data", function (done) {
            BaseService.update(obj, dataName).then(function (data) {
                expect(data).toEqual(obj);
                done();
            });

            $httpBackend.flush();
        });

        it("should remove data", function (done) {
            BaseService.remove(obj, dataName).then(function (data) {
                expect(data).toEqual(null);
                done();
            });

            $httpBackend.flush();
        });

        it("should remove list of data", function (done) {
            BaseService.removeArray(arr, dataName).then(function (data) {
                expect(data).toEqual(true);
                done();
            });

            $httpBackend.flush();
        });
    });

    describe("MailService", function () {

        var MailService;

        beforeEach(inject(function (_MailService_) {
            MailService = _MailService_;
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

    describe("ContactService", function () {

        var ContactService;

        beforeEach(inject(function (_ContactService_) {
            ContactService = _ContactService_;
        }));


        it("should get data for selected contact", function (done) {
            ContactService.getSelectedItem(dataName, "someid").then(function (data) {
                expect(data).toEqual(obj);
                done();
            });

            $httpBackend.flush();
        });

    });

});

describe("components", function () {

    var component, scope,
        MailService, ContactService,
        $componentController,
        folders, mails, contacts,
        mail, contact;

    beforeEach(module("mailApp"));

    beforeEach(inject(function ($rootScope, _$componentController_, _MailService_, _ContactService_) {
        $componentController = _$componentController_;
        scope = $rootScope.$new();
        MailService = _MailService_;
        ContactService = _ContactService_;
    }));

    describe("component: topNav", function () {
        it("should assign title bindings to the navList", function () {
            component = $componentController("topNav", {$scope: scope},
                {
                    navList: [{title: "Mails"}, {title: "Contacts"}]
                });
            expect(component.navList[0].title).toBe("Mails");
        });

        it("should reset selected item in ContactService", function () {
            component = $componentController("topNav", {$scope: scope});
            component.reset();
            expect(ContactService.selectedContact).toBe(null);
        });

        it("should reset selected item in MailService", function () {
            component = $componentController("topNav", {$scope: scope});
            component.reset();
            expect(MailService.selectedMail).toBe(null);
        });
    });

    describe("component: mailPage", function () {
        beforeEach(inject(function () {
            component = $componentController("mailPage", {$scope: scope});
        }));
        it("should return boolean", function () {
            expect(component.isMailSelected()).toBe(false);
        });
    });

    describe("component: contactPage", function () {
        beforeEach(inject(function () {
            component = $componentController("contactPage", {$scope: scope});
        }));
        it("should return boolean", function () {
            expect(component.isContactSelected()).toBe(false);
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

    describe("component: contactList", function () {
        beforeEach(inject(function ($q) {
            contacts = [{"name": "Alex"}, {"name": "Jane", "checked": true}];

            var getContactDeferred = $q.defer();
            spyOn(ContactService, "getData").and.returnValue(getContactDeferred.promise);
            getContactDeferred.resolve(contacts);

            var removeArrayDeferred = $q.defer();
            spyOn(ContactService, "removeArray").and.returnValue(removeArrayDeferred.promise);
            removeArrayDeferred.resolve(true);

            component = $componentController("contactList", {$scope: scope});

        }));

        it("should call ContactService.getData", function () {
            component.loadContacts();
            expect(ContactService.getData).toHaveBeenCalled();
        });

        it("should set contacts", function () {
            component.loadContacts();
            scope.$apply();
            expect(component.contacts).toEqual(contacts);
        });

        it("should set selected contact", function () {
            component.setSelectedContact({"name": "Alex"});
            expect(ContactService.selectedContact).toEqual({"name": "Alex"});
        });

        it("should call ContactService.removeArray", function () {
            component.items = contacts;
            component.remove();
            expect(ContactService.removeArray).toHaveBeenCalled();
        });

        it("should remove checked mails", function () {
            component.items = contacts;
            component.remove();
            scope.$apply();
            expect(component.items).toEqual([{"name": "Alex"}]);
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

            component = $componentController("mailView", {$scope: scope});

        }));

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
            expect(component.isNew).toEqual(true);
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

    describe("component: contactView", function () {
        beforeEach(inject(function ($q) {
            contact = {"name": "Alex"};

            var getSelectedDeferred = $q.defer();
            spyOn(ContactService, "getSelectedItem").and.returnValue(getSelectedDeferred.promise);
            getSelectedDeferred.resolve(mail);

            var addDeferred = $q.defer();
            spyOn(ContactService, "add").and.returnValue(addDeferred.promise);
            addDeferred.resolve();

            var updateDeferred = $q.defer();
            spyOn(ContactService, "update").and.returnValue(updateDeferred.promise);
            updateDeferred.resolve();

            component = $componentController("contactView", {$scope: scope},{contactId:1});

        }));

        it("should call ContactService.getSelectedItem", function () {
            component.getSelectedItem("users", 1);
            expect(ContactService.getSelectedItem).toHaveBeenCalled();
        });

        it("should set data for selected conatct", function () {
            component.getSelectedItem("users", 1);
            scope.$apply();
            expect(component.contact).toEqual(mail);
        });

        it("should set data for selected mail in ContactService", function () {
            component.getSelectedItem("users", 1);
            scope.$apply();
            expect(ContactService.selectedContact).toEqual(mail);
        });

        it("should return boolean", function () {
            expect(component.isNew).toEqual(true);
        });

        it("should call ContactService.add", function () {
            component = $componentController("contactView", {$scope: scope});
            component.contact = contact;
            component.save();
            expect(ContactService.add).toHaveBeenCalled();
        });

        xit("should call ContactService.update", function () {
            component = $componentController("contactView", {$scope: scope},{contactId:1});
            component.contact = contact;
            component.save();
            expect(ContactService.update).toHaveBeenCalled();
        });
    });

    describe("component: customButton", function () {
        beforeEach(function(){
            component = $componentController("customButton", {$scope: scope},
                {
                    name: "click",
                    class: "someClass",
                    disabled:true,
                    sref:"sref"
                });
        });
        it("should assign bindings value to name", function () {
            expect(component.name).toBe("click");
        });
        it("should assign bindings value to class", function () {
            expect(component.class).toBe("someClass");
        });
        it("should assign bindings value to sref", function () {
            expect(component.sref).toBe("sref");
        });
        it("should assign bindings value to disabled", function () {
            expect(component.disabled).toBe(true);
        });
    });

    describe("component: messages", function () {
        beforeEach(function(){
            component = $componentController("messages", {$scope: scope},
                {
                    element: "someElement",
                    errors: [{type: "email", text: "Enter a valid e-mail"}],
                    visibility:true
                });
        });
        it("should assign bindings value to element", function () {
            expect(component.element).toBe("someElement");
        });
        it("should assign bindings value to errors", function () {
            expect(component.errors).toEqual([{type: "email", text: "Enter a valid e-mail"}]);
        });
        it("should assign bindings value to visibility", function () {
            expect(component.visibility).toBe(true);
        });

    });
});