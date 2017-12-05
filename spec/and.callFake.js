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
        spyOn(Calculadora,"somar").and.callFake(function (n1,n2) {
            return n1 - n2;
        });
        spyOn(Calculadora,"subtrair");
    });
    it("Deve transforma o metodo somar em subtração",function () {
        expect(Calculadora.somar(4,3)).toEqual(1);
    });

});