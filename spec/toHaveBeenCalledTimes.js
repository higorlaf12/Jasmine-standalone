describe("Testes do objeto Spy", function () {
    var Calculadora = {
        somar: function (n1,n2) {
            return n1 + n2;
        }
    };
    beforeAll(function () {
        spyOn(Calculadora,"somar");
    });
    it("Deve chamar o método somar duas vezes",function () {
       Calculadora.somar(1,1)
       Calculadora.somar(1,2);
       expect(Calculadora.somar).toHaveBeenCalledTimes(2);
    });
});