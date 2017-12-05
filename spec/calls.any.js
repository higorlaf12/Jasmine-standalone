describe("Testes do objeto Spy", function () {
    var Calculadora = {
        somar: function (n1,n2) {
            return n1 + n2;
        },
        subtrair: function (n1,n2) {
            return n1 -n2;
        }
    };
    beforeEach(function () {
        spyOn(Calculadora,"somar").and.returnValue("Error");
        spyOn(Calculadora,"subtrair");
    });
    it("Deve demonstrar o uso do calls.any",function () {
        Calculadora.somar(1,1);
        expect(Calculadora.somar.calls.any()).toBeTruthy();
    });

});