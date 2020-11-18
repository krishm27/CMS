describe('CMService', function () {
    var CMService, httpBackend;
    var baseUrl = '/api/Contact/';
    beforeEach(function () {
        module('myapp');

        inject(function ($httpBackend, _cmService) {
            cmSvc = _cmService;
            httpBackend = $httpBackend;
        });
    });

    afterEach(function () {
        httpBackend.verifyNoOutstandingExpectation();
        httpBackend.verifyNoOutstandingRequest();
    });

    it('GetAllContacts', function () {

        var returnData = {};
        httpBackend.expectGET(baseUrl + 'GetContacts/').respond(returnData);
        var returnedPromise = cmSvc.getAll();
        var result;
        returnedPromise.then(function (response) {
            result = response.data;
        });
        httpBackend.flush();
        expect(result).toEqual(returnData);
    });

    it('GetContactById', function () {

        var returnData = {};
        httpBackend.expectGET(baseUrl + 'GetContactById/1').respond(returnData);
        var returnedPromise = cmSvc.getById(1);
        var result;
        returnedPromise.then(function (response) {
            result = response.data;
        });
        httpBackend.flush();
        expect(result).toEqual(returnData);
    });

    it('SaveContact', function () {

        var returnData = {};
        var dummyContact = {
            FirstName: 'Krishnendu',
            LastName: 'Mukherjee',
            Email: 'k.m@km.com',
            Phone: '1029384756',
            Status: true,
            ContactId: null
        };
        httpBackend.expectPOST(baseUrl + 'SaveContact/', dummyContact).respond(returnData);
        var returnedPromise = cmSvc.post(dummyContact);
        var result;
        returnedPromise.then(function (response) {
            result = response.data;
        });
        httpBackend.flush();
        expect(result).toEqual(returnData);
    });

    it('UpdateContact', function () {

        var returnData = {};
        var dummyContact = {
            FirstName: 'Krishnendu',
            LastName: 'Mukherjee',
            Email: 'k.m@km.com',
            Phone: '1029384756',
            Status: true,
            ContactId: 1
        };
        httpBackend.expectPUT(baseUrl + 'UpdateContact/', dummyContact).respond(returnData);
        var returnedPromise = cmSvc.put(dummyContact);
        var result;
        returnedPromise.then(function (response) {
            result = response.data;
        });
        httpBackend.flush();
        expect(result).toEqual(returnData);
    });

    it('DeleteContact', function () {

        var returnData = {};
        httpBackend.expectDELETE(baseUrl + 'DeleteContact/1').respond(returnData);
        var returnedPromise = cmSvc.delete(1);
        var result;
        returnedPromise.then(function (response) {
            result = response.data;
        });
        httpBackend.flush();
        expect(result).toEqual(returnData);
    });
});