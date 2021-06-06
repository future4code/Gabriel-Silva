//Aula 07 - Objetos - Exercícios de fixação

// Exercícios de interpretação de códigos

/* 
//-------------------------- EXERCÍCIO 1 --------------------------
//-- Leia o código abaixo
//---Tente responder os exercícios dessa seção sem executar o código. Se ficar muito difícil, pode rodar no seu computador para analisar e pensar sobre o resultado. 

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
//     Respostas:
// console.log(filme.elenco[0])
    // Neste console irá mostrar o primeiro valor do array elenco (posição [0]) do objeto filme que é: Matheus Nachtergaele.
// console.log(filme.elenco[filme.elenco.length - 1])
    // Neste console irá mostrar o último valor do array elenco (posição [3]) do objeto filme que é: Virginia Cavendish.
// console.log(filme.transmissoesHoje[2])
    // Neste console irá mostrar o terceiro valor do array transmissoesHoje (posição [2]) do obej  filme que é: {canal: "Globo", horario: "14h"}

*/

/*
//-------------------------- EXERCÍCIO 2 --------------------------
// Leia o código abaixo:

const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)
console.log(gato)
console.log(tartaruga)

//a) O que vai ser impresso no console?
//  será impresso 3 consoles:
//  1. 	nome: "Juca", idade: 3, raca: "SRD" // irá imprimir todos valores do objeto cachorro
//  2.  nome: "Juba", idade: 3, raca: "SRD" // irá copiar as propriedades do objeto cachorro mas com um novo nome: gato e alterando apenas a propriedade nome.
//  3.  nome: "Jubo", idade: 3, raca: "SRD" // irá copiar as propriedades do objeto gato mas com um novo nome: tartaruga e alterando a propriedade nome trocando apenas as letras a pela o
//b) O que faz a sintaxe dos três pontos antes do nome de um objeto?
//   Faz uma cópia do objeto com todas suas propriedades, sem alterar o arquivo "original"
*/  

/*
//-------------------------- EXERCÍCIO 3 --------------------------
//Leia o código abaixo:

function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))

//a) O que vai ser impresso no console?
//  foi impresso o valor false seguido de um undefined
//b) Explique o valor impresso no console. Você sabe por que isso aconteceu?
//  A função está sendo chamada para realizar o retorno do objeto e sua propriedade. 
//  No primeiro console foi impresso o false porque no objeto pessoa o valor atribuído é um false. 
//  No segundo console foi impresso undefined porque no objeto não temos a propriedade altura.
*/

// ---------------------------------------------------------------- //

// Exercícios de escrita de códigos.

//-------------------------- EXERCÍCIO 1 -------------------------- //

//Resolva os passos a seguir:
//a) Crie um objeto. Ele deve conter duas propriedades: nome (string) e apelidos (um array que sempre terá exatamente **três apelidos**). 
// Depois, escreva uma função que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo:
// // Exemplo de entrada:
// const pessoa = {
//     nome: "Amanda", 
//     apelidos: ["Amandinha", "Mandinha", "Mandi"]
//  }
// // Exemplo de saída
//  "Eu sou Amanda, mas pode me chamar de: Amandinha, Mandinha ou Mandi"

//b) Agora, usando o operador spread, crie um novo objeto mantendo o valor da propriedade nome, mas com uma nova lista de três apelidos. 
//Depois, chame a função feita no item anterior passando como argumento o novo objeto


//a) resposta
console.log("Exercício 1")
const pessoa1 = {
    nome: "Gabriel",
    apelidos: ["Biel","Binho","Bil"]
}

const imprimirPessoa = (objeto, propriedade) =>{
    return objeto[propriedade]
}
console.log(`Eu sou ${imprimirPessoa(pessoa1, "nome")}, mas pode me chamar de: 
${(pessoa1.apelidos[0])}, ${(pessoa1.apelidos[1])} ou ${(pessoa1.apelidos[2])}`)
// Trecho de código abaixo não funcionou =(
// console.log(`Eu sou ${imprimirPessoa(pessoa, "nome")}, mas pode me chamar de: ${imprimirPessoa(pessoa,"apelidos[0]")}, ${(imprimirPessoa(pessoa.apelidos[1]))} ou ${(imprimirPessoa(pessoa.apelidos[2]))}`)

//b)
const pessoa2 = {
    ...pessoa1,
    apelidos: ["Bielzinho", "Binhozinho", "Bilzinho"]
}
console.log("Apelidos no diminutivo:")
console.log(`Eu sou ${imprimirPessoa(pessoa2, "nome")}, mas pode me chamar de: ${(pessoa2.apelidos[0])}, ${(pessoa2.apelidos[1])} ou ${(pessoa2.apelidos[2])}`)
//pulando linha no console
console.log("\n")
console.log("Exercício 2")

//-------------------------- EXERCÍCIO 2 -------------------------- //
//Resolva os passos a seguir: 
//a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão.
//b) Escreva uma função que receba esses objetos e retorne um array com as seguintes informações:
// 1. O valor de `nome`
// 2. O numero de caracteres do valor `nome`
// 3. O valor de `idade`
// 4. O valor de `profissão`
// 5. O numero de caracteres do valor `profissão`

//a) resposta
const pessoa3 = {
    nome: "Luiz",
    idade: 25,
    profissao: "Desenvolvedor",
}
const pessoa4 = {
    nome: "Eduardo",
    idade: 20,
    profissao: "Estudante",
}
//b) resposta
const retornandoArrayPessoas = (objeto1) => {
    const arrayPessoa = [objeto1.nome,objeto1.nome.length,objeto1.idade,objeto1.profissao,objeto1.profissao.length,]
    return arrayPessoa
    }

console.log(retornandoArrayPessoas(pessoa3))
console.log(retornandoArrayPessoas(pessoa4))
//Pulando linha no console
console.log("\n")

//-------------------------- EXERCÍCIO 3 -------------------------- //
console.log("Exercício 3")
//Resolva os passos a seguir:

//a) Crie uma variável de escopo global que guarde um `array` vazio chamada `carrinho`
//b) Crie três novos objetos que representem frutas de um sacolão. Eles devem ter as seguintes 
//   propriedades: nome (`string`) e disponibilidade (`boolean` - devem começar como `true`)
//c) Crie uma função que **receba** um objeto fruta por **parâmetro** e coloque-a dentro do array de `carrinho`. 
//   Invoque essa função passando os três objetos criados. 


//a) Resposta
const carrinho = []

//b) Resposta
const fruta1 = {
    fruta: "Banana",
    disponibilidade: true
}

const fruta2 = {
    fruta: "Maça",
    disponibilidade: true
}

const fruta3 = {
    fruta: "Melão",
    disponibilidade: true
}
//c) Resposta
const carrinhoDeFrutas = (fruta) =>{
    carrinho.push(fruta)
    return carrinho
}
//d) Resposta
carrinhoDeFrutas(fruta1)
carrinhoDeFrutas(fruta2)
carrinhoDeFrutas(fruta3)
console.log(carrinho)


