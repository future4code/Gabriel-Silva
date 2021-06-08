// Exercícios de fixação 
// Aula 08 - Condicionais

// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGOS

// ------------------- EXERCÍCIO 1------------------- // 
// 1- Leia o código abaixo:
/*
const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}
*/
// a) Explique o que o código faz. Qual o teste que ele realiza? 
//  R: O código verifica a iguldade e identidade do valor recebido e se o valor informado no prompt é divisível por 2.
// b) Para que tipos de números ele imprime no console "Passou no teste"? 
//  R: Para todos os números pares (divisível por 2 que resultam 0)
// c) Para que tipos de números a mensagem é "Não passou no teste"?
//  R: Para os que o resto da divisão não sejam de resultado 0.

// ------------------- EXERCÍCIO 2------------------- // 
// 2- O código abaixo foi feito por uma pessoa desenvolvedora, contratada 
// para automatizar algumas tarefas de um supermercado:

/*
let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)
*/
// a) Para que serve o código acima?.
// R: Imprimir o a fruta informada no prompt e o seu valor;
// b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
// R: "O preço da fruta Maçã é R$  2.25"
// c) Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console 
// se retirássemos o `break` que está logo acima do `default` 
// (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?
// R: Iria imprimir: "O preço da fruta  Pêra  é  R$  5" - pois iria pegar o último valor armazenado pela variável valor.

// ------------------- EXERCÍCIO 3------------------- // 
// 3- Leia o código abaixo
/*
const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)
*/
// a) O que a primeira linha está fazendo?
// R: Está recebendo do prompt uma string e transformando em um número
// b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
// R: Digitando 10, será impresso: Esse número passou no teste
//    -> digitando -10 dará erro no console (constatei depois de testar o código)
// c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
// R: Sim! O erro se dará por conta do bloco da condicional. A variável declarada lá dentro não é acessível fora do escopo do if, 
//    -> pois é utlizada apenas para a condição existente.


// EXERCÍCIOS DE ESCRITA DE CÓDIGOS

// ------------------- EXERCÍCIO 1------------------- // 
// 1- Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir (apenas maiores de idade).
// a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.
// b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.
// c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. 
// Se sim, imprima no console `"Você pode dirigir"`, caso contrário, imprima `"Você não pode dirigir."

console.log("Exercício 1")
console.log("Será que você pode aprender a dirigir?")
const idadeUsuario = Number(prompt("Informe sua idade "))
    if (idadeUsuario >= 18){
        console.log(`Você tem ${idadeUsuario} anos e pode sim se habilitar para dirigir! Ah, e pode ser preso também!`)
    }else{
        console.log("Você não é +18, não pode dirigir!!! E caso insista e for pego pelo Maik, seus resposáveis irão arcar com seu erro, além que, podes ir para a FEBÉM!")   
    }
console.log("\n")

// ------------------- EXERCÍCIO 2------------------- // 
// 2- Agora faça um programa que verifica que turno do dia um aluno estuda. Peça para digitar M (matutino) ou V (Vespertino) ou N (Noturno). 
// Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco if/else

console.log("Exercício 2")
console.log("Em que turno você estuda?")
console.log("M (matutino)\nV (Vespertino)\nN (Noturno)")

const turnoEscolar1 = prompt("Em que turno você estuda? M (matutino) ou V (Vespertino) ou N (Noturno)")

if (turnoEscolar1 === "M"){
    console.log("Bom dia!")
}else if(turnoEscolar1 === "V"){
    console.log("Boa tarde!")
}else{
    console.log("Boa noite!")
}
console.log("\n")

// ------------------- EXERCÍCIO 3------------------- // 
// 3- Repita o exercício anterior, mas utilizando a estrutura de switch case agora.

console.log("Exercício 3")
console.log("Em que turno você estuda? \n(utilizando switch case)")
console.log("M (matutino)\nV (Vespertino)\nN (Noturno)")
const turnoEscolar2 = prompt("Em que turno você estuda? M (matutino) ou V (Vespertino) ou N (Noturno)")
switch (turnoEscolar2){

    case "M":
        console.log(`Bom dia! Você estuda no período ${turnoEscolar2}atutino.`)
        break
    case "V":
        console.log(`Boa tarde! Você estuda no período ${turnoEscolar2}espertino.`)
        break
    case "N":
        console.log(`Boa noite! Você estuda no período ${turnoEscolar2}oturno.`)
        break
    default:
        console.log("Estuda na madrugada?")
        break
}
console.log("\n")

// ------------------- EXERCÍCIO 4------------------- // 
// Considere a situação: você vai ao cinema com um amigo ou amiga, porém ele/ela só assistirá a um filme com você se ele for do gênero fantasia 
// e se o ingresso está abaixo de 15 reais. Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir e outra pergunta sobre o 
// preço do ingresso, então verifique se seu amigo ou amiga vai topar assistir o filme. 
// Caso positivo, imprima no console a mensagem: "Bom filme!", caso contrário, imprima "Escolha outro filme :("

console.log("Exercício 4")
console.log("Vamos assisir a um filme?")
const generoFilme = prompt("Informe o gênero do filme")
const valorIngresso = Number(prompt("Informe o valor do ingresso"))

if (generoFilme === "fantasia" && valorIngresso <= 15 ){
    console.log("Bom filme! O gênero é "+generoFilme+" e o valor do ingresso é R$ "+valorIngresso)
}else{
    console.log("Escolha outro filme :( \nAinda não temos o gênero "+generoFilme+" com ingresso no valor de R$"+valorIngresso+"\nQue tal um de fantasia e com valor de 15R$ ?")
}
console.log("\n")
// ------------------------------ DESAFIOS ------------------------------ // 
// 1- 
// Modifique o código do exercício 4 de escrita de código para, antes de imprimir a mensagem "Bom filme!", 
// pergunte ao usuário, pelo prompt qual lanchinho ele vai comprar (pipoca, chocolate, doces, etc) 
//e imprima no console as mensagens "Bom filme!" e "Aproveite o seu [LANCHINHO]", trocando [LANCHINHO] pelo que o usuário colocou no input.

console.log("DESAFIO 1")
console.log("Vamos assisir a um filme?")
const genFilme = prompt("Informe o gênero do filme")
const custoIngresso = Number(prompt("Informe o valor do ingresso"))
const lanchinho = prompt("Qual lanchinho irá comprar para acompanhar o filme?")

if (genFilme === "fantasia" && custoIngresso <= 15 ){
    console.log("Bom filme! O gênero é "+genFilme+" e o valor do ingresso é R$ "+custoIngresso+"\n e aproveite seu "+lanchinho)
}else{
    console.log("Escolha outro filme :( \nAinda não temos o gênero "+genFilme+" com ingresso no valor de R$"+custoIngresso+"\nQue tal um de fantasia e com valor de 15R$ ?")
}