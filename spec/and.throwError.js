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
        spyOn(Calculadora,"somar").and.throwError("Error");
        spyOn(Calculadora,"subtrair");
    });
    it("Deve lançar um erro ao somar",function () {
        expect(function () {
            Calculadora.somar(1,1);
        }).toThrowError("Error");
    });

});