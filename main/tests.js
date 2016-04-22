"use strict";

describe("components", function () {

    var component, scope,
        MailService, ContactService,
        $componentController;

    beforeEach(module("mailApp"));

    describe("component: topNav", function () {
        beforeEach(inject(function ($rootScope, _$componentController_, _MailService_, _ContactService_) {
            $componentController = _$componentController_;
            scope = $rootScope.$new();
            MailService = _MailService_;
            ContactService = _ContactService_;
        }));

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
});