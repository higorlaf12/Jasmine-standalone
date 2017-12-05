describe('Teste do fail',function(){
	it('Deve demontrar o uso fail',function(){
		var operacao = function(executar, callback){
			if(executar){
				callback();
			}
		}

		operacao(false, function(){
			fail("não deve executar função de callback");
		});

	});
});