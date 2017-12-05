describe('Teste do objeto jasmine.createSpy',function () {

    var somar;

    beforeAll(function () {
        somar = jasmine.createSpy("soma");
    });
    it("Deve demonstrar o uso do jasmine createSpy",function () {
       somar(1,2);

       expect(somar).toHaveBeenCalled();
       expect(somar).toHaveBeenCalledWith(1,2);
    });
});