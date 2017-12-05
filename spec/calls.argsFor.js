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
    it("Deve demonstrar o uso do calls.argsFor",function () {
        Calculadora.somar(1,1);
        Calculadora.somar(3,2);
        expect(Calculadora.somar.calls.argsFor(0)).toEqual([1,1]);
        expect(Calculadora.somar.calls.argsFor(1)).toEqual([3,2]);
    });

});