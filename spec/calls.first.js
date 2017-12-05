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
    it("Deve demonstrar o uso do calls.mostRecent",function () {
        Calculadora.somar(1,1);
        Calculadora.somar(3,2);

        var retorno = Calculadora.somar.calls.mostRecent();

        expect(retorno.object).toEqual(Calculadora);
        expect(retorno.args).toEqual([3,2]);
        expect(retorno.returnValue).toEqual(10);

    });

});