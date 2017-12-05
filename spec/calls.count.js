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
    it("Deve demonstrar o uso do calls.count",function () {
        Calculadora.somar(1,1);
        Calculadora.somar(3,2);
        expect(Calculadora.somar.calls.count()).toEqual(2);
    });

});