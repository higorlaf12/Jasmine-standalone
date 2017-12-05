describe("teste do tobeDefined",function(){
	it("Deve demontrar o uso do tobeDefined",function(){
		var n1 = 10;
		var n2;
		var n3 = undefined;
		expect(n1).toBeDefined();
		expect(null).toBeDefined();
		expect(NaN).toBeDefined();

		expect(n2).not.toBeDefined();
		expect(n3).not.toBeDefined();
	});
});