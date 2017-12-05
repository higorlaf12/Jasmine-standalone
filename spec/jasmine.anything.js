describe("Teste do objeto jasmine.anything",function () {
    var dobro;
    beforeEach(function () {
        dobro = jasmine.createSpy("dobro");
    });
    it("Deve demonstrar o uso do 'jasmine.anything'",function () {

        dobro(10);

        expect(dobro).toHaveBeenCalledWith(jasmine.anything());
        expect({}).toEqual(jasmine.anything());

    });
});