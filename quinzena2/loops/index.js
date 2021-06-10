// Exercícios de fixação 
// Aula 09 - Loops

// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGOS

// ------------------- EXERCÍCIO 1------------------- // 

// O que o código abaixo está fazendo? Qual o resultado impresso no console?
// let valor = 0
// for(let i = 0; i < 5; i++) {
//   valor += i
// }
// console.log(valor)

// R: O código está percorrendo pelo for e comparando o valor da variável "valor" e enquanto ela não for 5, o loop irá rodar e somar +1. 
// E ao concluir o loop, a variável "valor" soma o seu valor com a variável "i" que seu valor é 5, imprimindo no console o valor da operação: 10


// ------------------- EXERCÍCIO 2------------------- // 
// Leia o código abaixo:

// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
//   if (numero > 18) {
// 		console.log(numero)
// 	}
// }

// a) O que vai ser impresso no console?
// R: Será impresso os números maiores que 18 representados no array
// b) Se eu quisesse acessar o **índice** de cada elemento dessa lista, o `for...of...` é suficiente? Se sim, o que poderia ser usado para fazer isso?
// R: Sinceramente não vou conseguir responder esta questão :(
    // Mas, será ue poderia ser feito dessa maneira: 
    // const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
    // for (let numero of lista) {
    
    //   console.log([lista])
    // }
// com a resalva de que, irá imprimir todos os arrays.


// ------------------- EXERCÍCIO 3------------------- // 

//3. Qual seria o resultado impresso no console, se o usuário digitasse o número 4 ?

// const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
// let quantidadeAtual = 0
// while(quantidadeAtual < quantidadeTotal){
//   let linha = ""
//   for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
//     linha += "*"
//   }
//   console.log(linha)
//   quantidadeAtual++
// }

// R: Será impresso: 
// *
// **
// ***
// ****


// EXERCÍCIOS DE ESCRITA DE CÓDIGOS

// ------------------- EXERCÍCIO 1------------------- // 


// 1. Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável. 
//     a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"
//     b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um por um, e guarde esses nomes em um array
//         Coloque o seu prompt dentro de um loop. Esse loop deve ser executado a mesma quantidade de vezes que o usuário inseriu. Por exemplo: se o usuário tem 4 pets, 
//         ele deve conseguir inserir 4 nomes.
//     c) Por fim, imprima o array com os nomes dos bichinhos no console


let bichinhoDeEstimacao = Number(prompt("Quantos bichinhos de estimação você tem?"))
let arrayPets = []
let nomePet = ""
if (bichinhoDeEstimacao === 0 ){
    console.log("Que pena! Você pode adotar um pet!")
}else{
        for(i = 0; i < bichinhoDeEstimacao; i++){
        nomePet = prompt(`Que legal, digite o nome do seu ${i+1}º pet`)
        arrayPets = [nomePet] + [nomePet]
    }
    console.log("Seus pets são:", [nomePet])
}
