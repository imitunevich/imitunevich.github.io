"use strict";

describe("components", function () {

    var component, scope, $componentController;

    beforeEach(module("common"));

    beforeEach(inject(function ($rootScope, _$componentController_) {
        $componentController = _$componentController_;
        scope = $rootScope.$new();
    }));

    describe("component: customButton", function () {
        beforeEach(function () {
            component = $componentController("customButton", {$scope: scope},
                {
                    name: "click",
                    class: "someClass",
                    disabled: true,
                    sref: "sref"
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
        beforeEach(function () {
            component = $componentController("messages", {$scope: scope},
                {
                    element: "someElement",
                    errors: [{type: "email", text: "Enter a valid e-mail"}],
                    visibility: true
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