// Exercícios de fixação 
// Aula 10 - Callback e Funções de Array

// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGOS

// ------------------- EXERCÍCIO 1 ------------------- // 
// Leia o código abaixo:
// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" }
//   ]
  
//   const novoArrayA = usuarios.map((item, index, array) => {
//      console.log(item, index, array)
//   })

// a) O que vai ser impresso no console?
// R: será impresso todo o array e objetos

// ------------------- EXERCÍCIO 2 ------------------- // 
//Leia o código abaixo:

// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]
  
//   const novoArrayB = usuarios.map((item, index, array) => {
//      return item.nome
//   })
  
//   console.log(novoArrayB)
// a) O que vai ser impresso no console?
// R: Será impresso um array apenas com os atributos nome.


// ------------------- EXERCÍCIO 3 ------------------- // 
//Leia o código abaixo: 

// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]
  
//   const novoArrayC = usuarios.filter((item, index, array) => {
//      return item.apelido !== "Chijo"
//   })
  
//   console.log(novoArrayC)

// a) O que será impresso no console?
// R: Será impresso todos os atributos apelido que forem diferentes de Chijo.



// EXERCÍCIOS DE ESCRITA DE CÓDIGOS

// ------------------- EXERCÍCIO 1 ------------------- // 

// Dado o seguinte array de cachorrinhos que são clientes de um pet shop, 
// realize as operações pedidas nos itens abaixo utilizando as funções de array map e filter:

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]
console.log("Exercício 1\n")
 // a) Crie um novo array que contenha apenas o nome dos doguinhos
console.log("a) Apenas os nomes dos doguinhos:")
const nomeDoginhos = pets.map((item) =>{
    return item.nome
})
console.log(nomeDoginhos)

//b) Crie um novo array apenas com os cachorros salsicha
console.log("\nb) Array com os dogs salsichas:")
const arrayDogSalsicha = pets.filter((item) => {
    return item.raca === "Salsicha"
})
// const salsicha = pets.filter(arrayDogSalsicha)
console.log(arrayDogSalsicha)

//c) Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles. 
// A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a [NOME]!"
console.log("\nc) Premiação para os Poodles:")
const filtrarPoodle = pets.filter((inputPoodle) => {
    return inputPoodle.raca === "Poodle"
})

const premiacaoPoodle = filtrarPoodle.map((inputPoodle) => {
    return `Você ganhou um cupom de desconto de 10% para tosar o/a ${inputPoodle.nome}`
})
console.log(premiacaoPoodle)

