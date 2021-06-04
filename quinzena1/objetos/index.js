//Aula 07 - Objetos - Exercícios de fixação

// Exercícios de interpretação de códigos

/* -------------------------- EXERCÍCIO 1 --------------------------
-- Leia o código abaixo
---Tente responder os exercícios dessa seção sem executar o código. Se ficar muito difícil, pode rodar no seu computador para analisar e pensar sobre o resultado. 

const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0])
console.log(filme.elenco[filme.elenco.length - 1])
console.log(filme.transmissoesHoje[2])

// a) O que vai ser impresso no console?
//  Respostas:
// console.log(filme.elenco[0])
    // Neste console irá mostrar o primeiro valor do array elenco (posição [0]) do objeto filme que é: Matheus Nachtergaele.
// console.log(filme.elenco[filme.elenco.length - 1])
    // 
// console.log(filme.transmissoesHoje[2])
    // Neste console irá mostrar o terceiro valor do array transmissoesHoje (posição [2]) do obej  filme que é: {canal: "Globo", horario: "14h"}

*/