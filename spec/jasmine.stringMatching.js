describe("Teste do objeto jasmine.stringMatching",function () {
    var exibirTexto;
    beforeEach(function () {
       exibirTexto = jasmine.createSpy("exibirTexto");
    });
    it("Deve demonstrar o uso do 'jasmine.stringMatching'",function () {
        exibirTexto("Curso de Jasmine");
        expect(exibirTexto).toHaveBeenCalledWith(jasmine.stringMatching("Jasmine"));
        expect(exibirTexto).toHaveBeenCalledWith(jasmine.stringMatching(/jasmine/i));


        expect("Curso de JavaScript").toEqual(jasmine.stringMatching("JavaScript"));
    });
});