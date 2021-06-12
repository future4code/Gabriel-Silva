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


// let bichinhoDeEstimacao = Number(prompt("Quantos bichinhos de estimação você tem?"))
// let arrayPets = []
// let nomePet = ""
// if (bichinhoDeEstimacao === 0 ){
//     console.log("Que pena! Você pode adotar um pet!")
// }else{
//         for(i = 0; i < bichinhoDeEstimacao; i++){
//         nomePet = prompt(`Que legal, digite o nome do seu ${i+1}º pet`)
//         arrayPets.push(nomePet)
//     }
//     console.log("Seus pets são:", arrayPets)
// }


// ------------------- EXERCÍCIO 1------------------- // 
// Considere que você tenha acesso a um array  (chamado de 'array original') que é composto somente de números. 
// Baseando-se nisso, crie uma função para cada um dos itens abaixo, realizando as operações pedidas:

// a) Escreva um programa que **imprime** cada um dos valores do array original.
// b) Escreva um programa que **imprime** cada um dos valores do array original divididos por 10
// c) Escreva um programa que **crie** um novo array contendo, somente, os números pares do array original e **imprima** esse novo array
// d) Escreva um programa que **crie** um novo array contendo strings, da seguinte forma: 
// "O elemento do índex `i` é: `numero`". Depois, **imprima** este novo array.
// e) Escreva um programa que imprima no console o maior e o menor números contidos no array original

const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

//a)
console.log("Exercício a")
const imprimeArray = () =>{
        for (let i = 0; i < arrayOriginal.length; i++){
            console.log(arrayOriginal[i])
        }
}
imprimeArray()

//b)
console.log("\nExercício b")
const arrayDivisaoPor10 = () =>{
    for(let i = 0; i < arrayOriginal.length; i++){
        console.log(arrayOriginal[i]/10)
    }
}
arrayDivisaoPor10()

//c)
console.log("\nExercício c")
const ArrayPares = (inputArrayPares) =>{
    let numerosPares = []
    
    for(let i = 0; i < inputArrayPares.length; i++){
        if(inputArrayPares[i] % 2 === 0){
            numerosPares.push(inputArrayPares[i])
        }
    }
    return numerosPares
}
console.log(ArrayPares(arrayOriginal))

//d)
console.log("\nExercício d")
const imprimeNovoArray = (inputArrayPosicaoValor) =>{
    
    for (let i = 0; i < inputArrayPosicaoValor.length; i++){
        console.log("O elemento do índex "+ i + " é: "+ inputArrayPosicaoValor[i] +".")
    }
}
imprimeNovoArray(arrayOriginal)


//e)
