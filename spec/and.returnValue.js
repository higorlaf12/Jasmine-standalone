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
    it("Deve retonar 10 para o método somar",function () {
        expect(Calculadora.somar(5,2)).toEqual(10);
    });

});