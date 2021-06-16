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


// ------------------- EXERCÍCIO 2 ------------------- // 
console.log("\n")
console.log("Exercício 2\n")

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]
console.log(produtos)
// a) Crie um novo array que contenha apenas o nome de cada item
console.log("\na) Array com nome dos itens:")

const arrayNomeItens = produtos.filter((inputItens) => {
    return inputItens.nome
})
const produtosFiltrados = arrayNomeItens.map((produtos)=>{
    return produtos.nome
})
console.log(produtosFiltrados)

//b) Crie um novo array que contenha um objeto com o nome e o preço de cada item, aplicando 5% de desconto em todos eles

// Separei os produtos e seus valores, mas não consegui criar uma nova array de objetos somente com os dados solicitados
// Não consegui avançar a partir do código abaixo: 

// console.log("\nb) Nome e preço de itens com 5% de desconto:")
// const nomeItens = produtos.map((inputProduto)=>{
//     return inputProduto.nome 
// })
// console.log(nomeItens)

// const precoItens = produtos.map((inputProduto)=>{
//     const desconto5porc = inputProduto.preco - (inputProduto.preco * 0.05)
//     return desconto5porc.toFixed(2)
// })
// console.log(precoItens)

//Com a ajuda do colega Ryan, solucionamos o problema da seguinte maneira:
console.log("\nb) Nome e preço de itens com 5% de desconto:")
const arrayItemComDesconto = produtos.map((inputItens) =>{
    return {nome: inputItens.nome, preco: (inputItens.preco - (0.05*inputItens.preco)).toFixed(2)}
})
console.log(arrayItemComDesconto)


//)c) Crie um novo array que contenha apenas os objetos da categoria Bebidas 
console.log("\nc) Array somente com as bebidas:")
const filtrarBebidas = produtos.filter ((inputBebidas) => {
    return inputBebidas.categoria === "Bebidas"
})
console.log(filtrarBebidas)

//d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"
console.log("\nd) Array de objetos apenas com a palavra Ypê")
let listaProdutos = produtos.filter ((inputProduto)=>{
    return inputProduto.nome.includes("Ypê")
})
console.log(listaProdutos)

//e) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". 
// Esse array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê"
console.log("\ne) Array de objetos apenas com a palavra Ypê montando uma frase")
let listaProdutos2 = produtos.filter ((inputProduto)=>{
    return inputProduto.nome.includes("Ypê")
})

let listaProdutos3 = listaProdutos2.map((inputProduto)=>{
    return `Compre ${inputProduto.nome} por preço ${inputProduto.preco}`
})
console.log(listaProdutos3)
