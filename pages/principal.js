const fundo = document.querySelector("main");

const botao = document.querySelector(".envia");

botao.addEventListener("click", function(event) {
	event.preventDefault();
	var codigo = document.querySelector(".input").value;
	codigo.includes("\#") ? fundo.style.backgroundColor = codigo : fundo.style.backgroundColor = `\#${codigo}`
})

//A "if Statement" adicionada através do operador ternário permite funcionamento normal do código ainda que a "#" não tenha sido digitada pelo usuário.