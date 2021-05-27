// EXERCÍCIOS PARA FIXAÇÃO DO CONTEÚDO PASSADO NA AULA:
// Aula 05 - Strings e Arrays

// -------------------- EXERCÍCIOS DE INTERPETAÇÃO DE CÓDIGO -------------------- //

//---- EXERCÍCIO 1 
//Indique todas as mensagens impressas no console:

// let array
// console.log('a. ', array)
//a) undefined - pois não foi atribuido nenhum valor a esta variável

// array = null
// console.log('b. ', array)
//b) null - pois foi atribuido o valor null apara a variável array = null

// array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// console.log('c. ', array.length)
//c) 11 - pois o lenght irá mostrar a quantidade de itens que esstão no array.

// let i = 0
// console.log('d. ', array[i])
//d) 3 - a variável i está recebendo o valor de 0, que logo em seguida é pedido para mostrar 
//   no console como parâmetro para informar essa posição 0 (informada na varíavel) do array

// array[i+1] = 19
// console.log('e. ', array)
//e) o valor da variável i foi alterado para 1 (pela soma feita) fazendo com que o valor de 19 (senfo atribuido na variável i) seja atribuido na posição 1
// o console iria informar: [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]. 

// const valor = array[i+6]
// console.log('f. ', valor)
//f) Será informado no console a posição 6 do array, que é 9 

//---- EXERCÍCIO 2
// //Indique todas as mensagens impressas no console:

// const frase = prompt("Digite uma frase")
// console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)
// A frase escrita será toda convertida para MAIÚSCULO, e onde houver a letra A será substituida pela letra I. 
// E após, irá mostrar a contagem de caractéries com o length.
// o resultado será: SUBI NUM ÔNIBUS EM MIRROCOS 27
