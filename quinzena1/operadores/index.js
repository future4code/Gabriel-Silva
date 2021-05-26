// ---------- Exercícios Aula 04 - Operadores e Lógica de Programação -------------


// Do 1 ao 3, os exercícios são de interpretação de código sem a execução do programa


// --------------------- EXERCÍCIO 1 ---------------------
/*
Enunciado:
Leia o código abaixo. Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.

//trecho do código:

const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) 

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado)

console.log("d. ", typeof resultado)

-- RESPOSTAS: -- 
//a. false - TRUE && FALSE => FALSE
//b. false - TRUE && FALSE && TRUE => FALSE
//c. true - TRUE && TRUE => TRUE
//d. booleano - O TIPO DE VALOR QUE A VARIÁVEL resultado ESTÁ RECEBENDO É BOOLEANA

// --------------------- EXERCÍCIO 2 ---------------------

/*
Enunciado:
Seu colega se aproxima de você falando que o código dele não funciona como devia.  
Vamos ajudá-lo: consegue perceber algum problema? O que será impresso no console?

//trecho do código:

let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma)

-- RESPOSTA: --
    Será impresso a concatenação dos números informados. Ex:
        - primeiroNumero = 10
        - segundoNumero = 20
        - const soma = primeiroNumero + segundoNumero 
            -console.log(soma)
            - O resultado será "1020" por algumas razões: os valores não foram convertidos, 
            - a entrada está sendo uma string e o sinal de + realiza concatenação em caso de string.

// --------------------- EXERCÍCIO 3 ---------------------

Enuncuado:
Para o exercício anterior, sugira ao seu colega uma solução para que o valor 
impresso no console seja, de fato, a soma dos dois números.

Sugiro ao meu colega que faça a transformação logo na entrada dos dados com a função Number(). Ficará desta maneira:

let primeiroNumero = Number(prompt("Digite um numero!"))
let segundoNumero = Number(prompt("Digite outro numero!"))

const soma = primeiroNumero + segundoNumero

console.log(soma)

Com as entradas 10 e 20:
        - primeiroNumero = 10
        - segundoNumero = 20
        - const soma = primeiroNumero + segundoNumero 
            -console.log(soma)
            - O resultado será "30"

*/

// EXERCÍCIOS DE ESCRITA DE CÓDIGOS:

// --------------------- EXERCÍCIO 1 -----------------------//
// Faça um programa que:
// a) Pergunte a idade do usuário
// b) Pergunte a idade do seu melhor amigo ou da sua melhor amiga
// c) **Imprima na console** a seguinte mensagem: "Sua idade é maior do que a do seu melhor amigo?", seguido pela resposta (`true` ou `false`)
// d) **Imprima na console** a diferença de idade (não tem problema se sair um número negativo)

let idade = Number(prompt("Qual a sua idade?"))
let idadeAmigo = Number(prompt("Qual a idade do seu amigo(a)?"))

const comparacao  = idade > idadeAmigo || idadeAmigo < idade

console.log("Minha idade é:",idade)
console.log("Idade do meu amigo(a) é: ",idadeAmigo)
console.log("Sua idade pe maior que a do seu amigo?",comparacao)
//Fução Math.abs() para trazr o número PAR mesmo se o resultado for ÍMPAR - essa função tras o valor absoluto de um  número 
console.log("A diferença de idade é de", Math.abs(idade-idadeAmigo),"anos")

// --------------------- EXERCÍCIO 2 -----------------------//
// Faça um programa que:
// a) Peça ao usuário que insira um número **par**
// b) Imprima na console **o resto da divisão** desse número por 2.
// c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.
// d) O que acontece se o usuário inserir um número ímpar? Escreva em um comentário de código

//a)
let numero = Number(prompt("Insira um numero PAR"))
//Informando no console o valor digiado pelo usuário:
console.log("O número informado foi", numero)

//b) Informando no console o resto da divisão por 2:
console.log("O resto da divisão é: ", numero % 2)

//Informando se o numero é PAR (true) ou IMPAR (false)
console.log("O numero digitado é par?", numero % 2 === 0)

//c) Percebi que o resto da divisão, se for digitado um número positivo e feita a divisão por 2, o resultado do resto será 0 (constantemente)
//d) Se o usuário informar um número impar, o resultado do resto será sempre 1 (neste caso que o resto da divisão é por %2)

// --------------------- EXERCÍCIO 3 -----------------------//
//Faça um programa que pergunte ao usuário sua idade em anos. Depois, imprima no console
//a) A idade do usuário em meses
//b) A idade do usuário em dias
//c) A idade do usuário em horas

let idadeUser = Number(prompt("Quantos anos você tem?"))

//a)
console.log("Sua idade em meses é:", idadeUser * 12)
//b}
console.log("Sua idade em dias é de:", idadeUser * 365)
//C)
console.log("Sua idade em horas é de:", idadeUser * (365 * 24))


// --------------------- EXERCÍCIO 4 -----------------------//
// //Faça um programa que pergunte ao usuário dois números. Em seguida, faça as operações e imprima no console as seguintes mensagens:
// O primeiro numero é maior que segundo? 
// O primeiro numero é igual ao segundo? 
// O primeiro numero é divisível pelo segundo?
// O segundo numero é divisível pelo primeiro?
let n1 = Number(prompt("informe o primeiro número"))
let n2 = Number(prompt("informe o segundo número"))

console.log("O número",n1,"é maior que o",n2,"?", n1 > n2)
console.log("O número",n1,"é igual ao",n2,"?", n1 === n2)
console.log("O número",n1,"é divisível pelo",n2,"?", n1 % n2 === 0)
console.log("O número",n2,"é divisível pelo",n1,"?", n2 % n1 === 0)
