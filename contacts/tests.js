"use strict";
describe("services", function () {
    beforeEach(module("contacts"));

    describe("ContactService", function () {

        var objects, obj, arr, baseURL, $httpBackend, dataName, ContactService;

        beforeEach(inject(function (_$httpBackend_, _ContactService_) {
            obj = {"name": "Ivan", "id": "someid"};

            baseURL = "https://fiery-inferno-8968.firebaseio.com/";
            dataName = "inbox";

            $httpBackend = _$httpBackend_;
            ContactService = _ContactService_;

            $httpBackend.whenGET(`${baseURL}${dataName}/someid.json`).respond(obj);
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
        ContactService,
        $componentController,
        contacts, contact, mail;

    beforeEach(module("mailApp"));

    beforeEach(inject(function ($rootScope, _$componentController_, _ContactService_) {
        $componentController = _$componentController_;
        scope = $rootScope.$new();
        ContactService = _ContactService_;
    }));

    describe("component: contactPage", function () {
        beforeEach(inject(function () {
            component = $componentController("contactPage", {$scope: scope});
        }));
        it("should return boolean", function () {
            expect(component.isContactSelected()).toBe(false);
        });
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

            component = $componentController("contactView", {$scope: scope}, {contactId: 1});

        }));

        it("should assign bindings value to the contactId", function () {
            expect(component.contactId).toBe(1);
        });

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
            expect(component.isNew).toEqual(false);
        });

        it("should call ContactService.update", function () {
            component = $componentController("contactView", {$scope: scope}, {contactId: 1});
            component.contact = contact;
            component.save();
            expect(ContactService.update).toHaveBeenCalled();
        });

        it("should call ContactService.add", function () {
            component = $componentController("contactView", {$scope: scope});
            component.contact = contact;
            component.save();
            expect(ContactService.add).toHaveBeenCalled();
        });


    });
});