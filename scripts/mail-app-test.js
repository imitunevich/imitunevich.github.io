describe("App", function () {

    var objects, obj, arr, baseURL;

    beforeEach(module("mailApp"));

    beforeEach(function () {
        objects = {"someid": {"name": "Ivan"}};
        obj = {"name": "Ivan", "id": "someid"};
        arr = [obj]
    });

    describe("UtilsService", function () {
        it("should normalize object to array", inject(function (UtilsService) {
            expect(UtilsService.normalizeToArray(objects)).toEqual(arr);

            //expect(true).toBe(true);
        }));
    });

    beforeEach(function () {
        baseURL = "https://fiery-inferno-8968.firebaseio.com/";
    });

    describe("BaseService", function () {

        var BaseService,
            $httpBackend,
            folderName = "inbox";

        beforeEach(inject(function (_BaseService_, _$httpBackend_) {
            BaseService = _BaseService_;
            $httpBackend = _$httpBackend_;
            $httpBackend.whenGET(`${baseURL}${folderName}.json`).respond(objects);
            $httpBackend.whenGET(`${baseURL}${folderName}/someid.json`).respond(obj);
            $httpBackend.whenPOST(`${baseURL}${folderName}.json`, obj).respond("someid");
            $httpBackend.whenPUT(`${baseURL}${folderName}/someid.json`, obj).respond(obj);
            $httpBackend.whenDELETE(`${baseURL}${folderName}/someid.json`).respond(null);
        }));

        it("should get list of data", function (done) {
            BaseService.getData(folderName).then(function (data) {
                expect(data).toEqual(arr);
                done();
            });

            $httpBackend.flush();
        });

        it("should get data for selected item", function (done) {
            BaseService.getSelectedItem(folderName, "someid").then(function (response) {
                expect(response.data).toEqual(obj);
                done();
            });

            $httpBackend.flush();
        });

        it("should add data", function (done) {
            BaseService.add(obj, folderName).then(function (newItem) {
                expect(newItem).toEqual(obj);
                done();
            });

            $httpBackend.flush();
        });

        it("should update data", function (done) {
            BaseService.update(obj, folderName).then(function (data) {
                expect(data).toEqual(obj);
                done();
            });

            $httpBackend.flush();
        });

        it("should remove data", function (done) {
            BaseService.remove(obj, folderName).then(function (data) {
                expect(data).toEqual(null);
                done();
            });

            $httpBackend.flush();
        });

        it("should remove list of data", function (done) {
            BaseService.removeArray(arr, folderName).then(function (data) {
                expect(data).toEqual(true);
                done();
            });

            $httpBackend.flush();
        });
    });

});
