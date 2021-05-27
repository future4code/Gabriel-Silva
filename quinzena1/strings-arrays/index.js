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


// -------------------- EXERCÍCIOS DE ESCRITA DE CÓDIGO -------------------- //

//1. Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, imprima na tela a seguinte mensagem:
//O e-mail emailDoUsuario foi cadastrado com sucesso. Seja bem-vinda(o), nomeDoUsuario!

console.log("Resultado exercício 1")
const nomeDoUsuario = prompt("Informe seu nome")
const emailDoUsuario = prompt("Informe seu e-mail")
//Informando quais dados foram passados:
console.log("Seu nome é:",nomeDoUsuario)
//método trim() para remover os possíveis espaços de antes e depois de inseridos o e-mail
console.log(`Seu email é: ${emailDoUsuario.trim()}`)
console.log(`Mensagem:\nO email ${emailDoUsuario.trim()} foi cadastrado com sucesso. Seja bem vindo ${nomeDoUsuario}`)
// inserindo quebra de linha 
console.log("\n")

//------------------------------------------------------------------------------

//2. Faça um programa que contenha um array com 5 das suas comidas preferidas, 
// //armazenado em uma variável. Em seguida, siga os passos:
// a) Imprima na tela o array completo
// b) Imprima na tela a mensagem "Essas são as minhas comidas preferidas: ", seguida por cada uma das comidas, **uma embaixo da outra**.
// c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima na tela a nova lista
console.log("Resultado exercício 2")
let arrayComidas = ["Arroz", "Feijão", "Bife", "Batata Frita", "Salada"]
//a)
console.log("Array completo:",arrayComidas)
//b)
console.log(`Essas são minhas comidas preferidas \n${arrayComidas.toString().replaceAll(",","\n")}`)
//c)
let comidaPreferida = prompt("Informe outra comida preferida")
arrayComidas[1] = comidaPreferida

console.log("----------------Atualizando o Array--------------\n")
console.log("O item 2 da lista foi atualizado por:",comidaPreferida)
console.log("O novo array de comidas preferidas é:",arrayComidas)
console.log(`Essas são minhas comidas preferidas \n${arrayComidas.toString().replaceAll(",","\n")}`)

// inserindo quebra de linha 
console.log("\n")

//----------------------------------------------------------------------------

//3. Faça um programa, seguindo os passos:
// a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`
// b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array
// c) Imprima o array na tela
// d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2 
// e) Remova da lista o item de índice que o usuário escolheu.
// f) Imprima o array na tela
console.log("Resultado exercício 3")
//a)
let listaDeTarefas = []
//b)
let tarefa1 = prompt("1. tarefa do dia")
let tarefa2 = prompt("2. tarefa do dia")
let tarefa3 = prompt("3. tarefa do dia")

 listaDeTarefas.push(tarefa1)
 listaDeTarefas.push(tarefa2)
 listaDeTarefas.push(tarefa3)
//c)
console.log(listaDeTarefas)
//d)
console.log("Tarefa de índice nº 0:",listaDeTarefas[0])
console.log("Tarefa de índice nº 1:",listaDeTarefas[1])
console.log("Tarefa de índice nº 2:",listaDeTarefas[2])
//e)
let tarefaRealizada = Number(prompt("Digite qual tarefa você já realizou? Informe o índice (0, 1 ou 2)"))
let tarefaExcluida = listaDeTarefas[tarefaRealizada]
listaDeTarefas.splice(tarefaRealizada , 1)
//f)
console.log(`O índice escolhido foi o: ${tarefaRealizada}. \nA tarefa realizada foi: ${tarefaExcluida}.`)
console.log("Ainda restam realizar as terefas:", listaDeTarefas)




