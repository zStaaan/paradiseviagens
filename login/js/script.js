var entrar = document.getElementById("entrar");
var invalid = document.getElementById("invalid");
var invalid2 = document.getElementById("invalid2");
entrar.addEventListener("click", login);
invalid.addEventListener("click", invalido);
invalid2.addEventListener("click", invalido);

function login()
{
	var email = document.getElementById("email").value;
	var senha = document.getElementById("senha").value;
	var login = ['admin','admin'];
	if(email == login[0] && senha == login[1])
	{
		var msg = document.getElementById("msg");
		msg.innerHTML = "Bem vindo viajante!";

		var img = document.getElementById("div");
		img.innerHTML = '';
		
	}else
	{
		alert('Login ou senha são inválidos');
	}
}
function invalido()
{
	alert('Esta ação está inválida no momento, por favor, tente mais tarde');
}