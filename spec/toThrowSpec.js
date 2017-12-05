describe('Teste do toThrow',function(){
	it('Deve demonstrar o uso do toThrow',function(){
		function multiplica (){
			 numero * 10;
		}

		function somar(n1,n2){
			return n1+n2;
		}

		expect(multiplica).toThrow();
		expect(somar).not.toThrow();
	});
});