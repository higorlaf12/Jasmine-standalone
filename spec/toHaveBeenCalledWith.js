describe("Testes do objeto Spy", function () {
    var Calculadora = {
        somar: function (n1,n2) {
            return n1 + n2;
        }
    };
    beforeAll(function () {
        spyOn(Calculadora,"somar");
    });
    it("Deve chamar o méto somar com os parâmetros válidos",function () {
        Calculadora.somar(1,1);
        Calculadora.somar(1,2);
        expect(Calculadora.somar).toHaveBeenCalledWith(1,1);
        expect(Calculadora.somar).toHaveBeenCalledWith(1,2);
    });
});