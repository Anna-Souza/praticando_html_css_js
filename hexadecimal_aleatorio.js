//LÓGICA PARA TROCA ALEATÓRIA DE CORES EM PADRÃO HEXADECIMAL

const fundo = document.querySelector("body");

const botao = document.querySelector("#cor");

const span = document.querySelector("span");

function trocaCor() {
	var caracteres = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
	
	var corfinal = ["\#" ];

	for (var i = 0; i<6; i++) {
		const sorteio = Math.floor(Math.random()*caracteres.length);
		const escolhido = caracteres[sorteio];
		var elementosEscolhidos = corfinal.push(escolhido);
	}
	var hexa = corfinal.toString();
	var hash = hexa.replaceAll("\,", "");
	fundo.style.backgroundColor = hash;
	span.textContent = hash;
}

botao.addEventListener("click", trocaCor);