"use strict";
describe("services", function () {

    var objects, obj, arr, baseURL, $httpBackend, dataName;

    beforeEach(module("services"));

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

    describe("BaseService", function () {

        var BaseService;

        beforeEach(inject(function (_$httpBackend_,_BaseService_, _UtilsService_) {
            baseURL = "https://fiery-inferno-8968.firebaseio.com/";
            dataName = "inbox";

            $httpBackend = _$httpBackend_;
            BaseService = _BaseService_;
            BaseService.utilsService = _UtilsService_;

            $httpBackend.whenGET(`${baseURL}${dataName}.json`).respond(objects);
            $httpBackend.whenGET(`${baseURL}${dataName}/someid.json`).respond(obj);
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
});