//LÓGICA DE ALTERAÇÃO DAS CORES BÁSICAS


const fundo = document.querySelector("body");

const botao = document.querySelector("#cor");

function trocaCor() {
	var cores = ["Yellow", "Purple", "Red", "Orange", "Green", "Blue", "Gray", "Brown", "Lime", "Pink", "White"]
	var i = Math.round(Math.random()*10);
	fundo.style.backgroundColor = cores[i];
	var span = document.querySelector("span");
	span.textContent = cores[i];
}

botao.addEventListener("click", trocaCor);
