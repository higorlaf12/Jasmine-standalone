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
        spyOn(Calculadora,"somar").and.returnValues(1,5);
        spyOn(Calculadora,"subtrair");
    });
    it("Deve retonar valores distintos método somar",function () {
        expect(Calculadora.somar(3,4)).toEqual(1);
        expect(Calculadora.somar(5,3)).toEqual(5);
        expect(Calculadora.somar(6,6)).toBeUndefined();
    });

});