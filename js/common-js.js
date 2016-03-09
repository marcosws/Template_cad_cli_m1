/***************************************************
 * Autor: Marcos Willian de Souza - Data: 07/03/2016 
 * Arquivo: common-js.js 
 ***************************************************/

function verifica(){

	// extrai o valor do campo pelo 'id' do <input>
	var executa_comando = false;
	var idade = document.getElementById('idd_num');
	var d = idade.value;
	var nome = document.getElementById('nome');
	var n = nome.value;
	var email = document.getElementById('email');
	var e = email.value;
	var nick = document.getElementById('nick');
	var k = nick.value;
	
	var msg = "";
	var cont = 0;
	var campo_vazio = false;
	if( d === "" ){
		msg = " [Idade] ";
		campo_vazio = true;
		cont = 1;
	}
	if( n === "" ){
		msg += " [Nome] ";
		campo_vazio = true;
		cont += 1;
	}
	if( e === "" ){
		msg += " [Email] ";
		campo_vazio = true;
		cont += 1;
	}
	if( k === "" ){
		msg += " [Nick Name] ";
		campo_vazio = true;
		cont += 1;
	}
	// executa a mensagem de avisando que deve(m) preencher o(s) campo(s) vazio(s).
	if (campo_vazio === true){
		// se for mais de um campo utiliza a mensagem no plural.
		var msg_final = "";
		if(cont > 1){
			msg_final = "Os Campos" + msg + "Devem ser preenchidos.";
		}
		else{
			msg_final = "O Campo" + msg + "Deve ser preenchido.";
		}
		alert(msg_final);
	}
	else{ 
	
		// mostra a mensagem padrão, informando os campos preenchidos.
		var msg_b = true;
		if (!validaNumero(d)){
			alert("O campo [Idade] deve ser preenchido apenas com numeros.");
			msg_b = false;
		}
		if (!validaEmail(e)){
			alert("O valor do campo [Email] é invalido.");
			msg_b = false;
		}
		if(msg_b === true){
			executa_comando = true;
			alert("Seu Nome é: [" + n + "]\nSua Idade é: [" + d + "]\nSeu E-mail é: [" + e + "]\nSeu Nick Name é: [" + k + "]\n\nObrigado por utilizar este serviço. ");
		}
		
	}
	return executa_comando;
}
function validaNumero(nump){

	/* Retorna true se for um numeo e false caso contrario
	   Ex: para 123 ,2345646 retorna 'true' e 
	   para 122w ,teste ,s233 retorna 'false' */
	   
	var numero = nump.toString();
	var num = "0123456789";
	var checkNum = true;
	var isNum = false;
	
	for(var i = 0; i <= numero.length; i++){
		isNum = false;
		for(var j = 0; j <= num.length; j++){
			if (num.substr(j,1) === numero.substr(i,1)){
				isNum = true;
			}
		}
		if (isNum === false){
			checkNum = false;
		}
	}
	
	return checkNum;
	

}
function validaEmail(email){

	// Fonte: Expressão regular para validar email: http://www.devmedia.com.br/validando-formularios-usando-regular-expression/12042
	var res = email.match(/^([\w\-]+\.)*[\w\- ]+@([\w\- ]+\.)+([\w\-]{2,3})$/g);
	if(res === null){
		return false;
	}
	else{
		return true;
	}

}