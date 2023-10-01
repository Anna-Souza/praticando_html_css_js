const fundo = document.querySelector("main");

const botao = document.querySelector(".cor");

function trocaCor() {
	var colors = ["Yellow", "Purple", "Red", "Orange", "Green", "Blue", "Gray", "Brown", "Lime", "Navy", "White", "Hotpink", "Fuchsia", "Aqua", "Coral", "Gold", "Indigo", "Olive", "Turquoise"];
	var cores = ["Amarelo", "Roxo", "Vermelho", "Laranja", "Verde", "Azul", "Cinza", "Marrom", "Verde Limão", "Azul Marinho", "Branco", "Rosa", "Fucsia", "Verde Água", "Coral", "Ouro", "Índigo", "Verde Oliva", "Turquesa"];
	var i = Math.round(Math.random()*18);
	fundo.style.backgroundColor = colors[i];
	var span = document.querySelector("span");
	span.textContent = cores[i];
	console.log(i);
}

botao.addEventListener("click", trocaCor);
