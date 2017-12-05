describe("Teste do objeto jasmine.any",function () {
    var dobro;
    beforeEach(function () {
        dobro = jasmine.createSpy("dobro");
    });
    it("Deve demonstrar o uso do 'jasmine.any'",function () {

        dobro(10);

        expect(dobro).toHaveBeenCalledWith(jasmine.any(Number));

    });
});