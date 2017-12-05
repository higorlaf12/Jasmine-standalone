describe('Teste do toContain',function(){
	it('Deve demonstrar o uso do toContain',function(){
		var texto = "Meu nome é Higor";
		var frutas = ["laranja","banana","pera"];

		expect(texto).toContain("Higor");
		expect(texto).not.toContain("higor");

		expect(frutas).toContain("laranja");
		expect(frutas).not.toContain("uva");
	});
});