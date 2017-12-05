describe('Comparador toBe',function(){
	it("Deve validar o uso do toBe",function(){
		var Obj1 = {valor: true};
		var Obj2 = {valor: true};

		expect(true).toBe(true);
		expect('Teste').toBe('Teste');
		expect(Obj1).not.toBe(Obj2);
	});
});