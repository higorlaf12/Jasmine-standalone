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
        spyOn(Calculadora,"somar").and.returnValue(10);
        spyOn(Calculadora,"subtrair");
    });
    it("Deve demonstrar o uso do calls.reset",function () {
        Calculadora.somar(1,1);
        Calculadora.somar(3,2);
        expect(Calculadora.somar.calls.any()).toBeTruthy();

        Calculadora.somar.calls.reset();

        expect(Calculadora.somar.calls.any()).toBeFalsy();
    });

});