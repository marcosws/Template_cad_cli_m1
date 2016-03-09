/***************************************************
 * Autor: Marcos Willian de Souza - Data: 07/03/2016 
 * Arquivo: format-valid-js.js 
 ***************************************************/

$(function(){

	var temp = false;
	$('.idade').keypress(function(){
	
	    // O input que estamos utilizando
        var input = $(this);
	
		// Limpa o timeout antigo
        if (temp){
            clearTimeout(temp);
        }
		
		temp = setTimeout(function(){
		
			// Remove as classes de válido e inválido
            input.removeClass('validado');
            input.removeClass('nvalidado');
		
			var idade = input.val();
			
			var valida = validaNumero(idade);
			
			// Testa a validação
            if(valida) {
                input.addClass('validado');
            } else {
                input.addClass('nvalidado');
            }
		
		},500);
	
	});

});
$(function(){

	var temp = false;
	$('.email').keypress(function(){
	
		var input = $(this);
		
		var input = $(this);
	
		// Limpa o timeout antigo
        if (temp){
            clearTimeout(temp);
        }
		
		temp = setTimeout(function(){
		
			// Remove as classes de válido e inválido
            input.removeClass('validado');
            input.removeClass('nvalidado');
		
			var email = input.val();
			
			var valida = validaEmail(email);
			
			// Testa a validação
            if(valida) {
                input.addClass('validado');
            } else {
                input.addClass('nvalidado');
            }
		
		},500);
	
	});

});