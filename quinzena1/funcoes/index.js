// Aula 06 - Funções
// EXERCÍCIOS DE FIXAÇÃO

// ----------------- EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGOS ----------------- //


// ----------------- 1. ----------------- //
//1 Leia o código abaixo

// function minhaFuncao(variavel) {
// 	return variavel * 5
// }
// console.log(minhaFuncao(2))
// console.log(minhaFuncao(10))

// a) O que vai ser impresso no console?
    // R. Será impresso a multiplicação dos números. 1º resultado= 10 - 2º resultado=50 
// b) O que aconteceria se retirasse os dois `console.log` e simplesmente invocasse a função `minhaFuncao(2)` e `minhaFuncao(10)`? O que apareceria no console?
   // R. O código iria quebrar, e a mansagem surge: is not a function. 

// ----------------- 2. ----------------- //

// Leia o código abaixo:

// let textoDoUsuario = prompt("Insira um texto");
// const outraFuncao = function(texto) {
// 	return texto.toLowerCase()
// }
// const resposta = outraFuncao(textoDoUsuario)
// console.log(resposta)

//a) Explique o que essa função faz e qual é sua utilidade.
//  R. A função outraFuncao está transformando o texto recebido do prompt para minúsculo, e verificando com o .includes() 
//     se a palavra cenoura está dentro do texto informado pelo usuário no prompt

//b) Para as 3 saídas, o console retorna true, pois em todas as frases consta a palavra cenora. 
//   Se removermos o .includes(), todas as frases serão apresentadas em minúsculo.

// ----------------- EXERCÍCIOS DE ESCRITA DE CÓDIGOS ----------------- //

// ----------------- 1. ----------------- //
// Escreva as funções explicadas abaixo:
// a) A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas informações sobre você, como: 
// "Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."
// Troque o nome, idade, cidade e se é estudante ou não por informações sobre você. 
// Lembrando que a função não possui entradas, apenas imprime essa mensagem.
 
console.log("Exercício 1a.\nCódigo em execução:")
function informacoesAluno1() {
    let nome = "Gabriel"
    let idade = 29
    let endereco = "Itapevi/SP"
    let profissao = "Montador de Drywall"
    console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${endereco} e sou ${profissao}`)
    console.log("\n")
}
informacoesAluno1()

// b) Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: o nome (string), a idade (number), 
//    a cidade (string) e uma profissão (string). Ela deve retornar uma string que unifique todas as informações da pessoa em uma só mensagem com o template:

    console.log("Exercício 1b.\nCódigo em execução:")
    function informacoesAluno(nome, idade, endereco, profissao){
    let dados = console.log(`Eu me chamo ${nome}, tenho ${idade} anos, moro em ${endereco} e sou ${profissao}`)
    return dados
}
informacoesAluno(`Gabriel`, 29, `Itapevi/SP`, `Montador de Drywall`)
console.log("\n")

//----------------- 2. ----------------- //

// a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e retorne o resultado. Invoque a função e imprima no console o resultado.
console.log("Exercício 2a.\nResultado do código:")
let num1 = Number(prompt("Informe um numero para realizar uma soma:"))
let num2 = Number(prompt("Informe outro numero para realizar uma soma:"))
function somaDeDoisNumeros(n1, n2){
    let soma = n1 + n2
    // console.log(soma)
    return soma
}
console.log(`A soma de ${num1} e ${num2} é:`,somaDeDoisNumeros(num1, num2))
console.log("\n")

// b) Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é **maior ou igual** ao segundo.
console.log("Exercício 2b.\nResultado do código:")
let num3 = Number(prompt("Informe um numero:"))
let num4 = Number(prompt("Informe outro numero:"))
function numerosBooleanos(n1, n2){
    let resultado = n1 >= n2
    return resultado
    }
console.log(`O número ${num3} é maior ou igual ao ${num4}?`,numerosBooleanos(num3, num4))
console.log("\n")

// c) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não
    console.log("Exercício 2c.\nResultado do código:")
    let num5 = Number(prompt("Informe um numero para verificar se é PAR:"))
    function numeroPar(n1){
        let resultado = ((n1 % 2) == 0)
        return resultado
    }
    console.log(`O número ${num5} é par?`,numeroPar(num5))
    console.log("\n")

// d) Faça uma função que recebe uma mensagem (`string`) como parâmetro e imprima o tamanho dessa mensagem, juntamente com uma versão dela em letras maiúsculas.
    console.log("Exercício 2d.\nResultado do código:")
    let mensagem = prompt("Digite uma frase maneira:")

    function fraseEmMaiusculo(frase){
        let texto = (
        `A frase é: ${mensagem}
        \nEm caixa alta é: ${mensagem.toUpperCase()}
        \nSua frase tem ${mensagem.length} caractéries`)

        return texto
    }   
    console.log(fraseEmMaiusculo())
    console.log("\n")

    
//----------------- 3. ----------------- //

// Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão). 
// Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores inputados pelo usuário sendo o argumento. 
// Por fim, mostre no console o resultado das operações:

const realizaSoma = (n1, n2) => {
    const soma = n1+n2
    return soma
}

const realizaSubtracao = (n1, n2) => {
    const subtracao = n1-n2
    return subtracao
}

const realizaMultiplicacao = (n1, n2) => {
    const multiplcacao = n1*n2
    return multiplcacao
}

const realizaDivisao = (n1, n2) => {
    const divisao = n1/n2
    return divisao
}

const realizaResto = (n1, n2) => {
    const resto = n1%n2
    return resto
}

const resultadoOperacoes1 = Number(prompt("Infome um número"))
const resultadoOperacoes2 = Number(prompt("Infome outro número"))
console.log("Exercício 3\nResultado do código:")
console.log(`Números inseridos ${resultadoOperacoes1} e ${resultadoOperacoes2}`+
"\nA soma é: "+realizaSoma(resultadoOperacoes1,resultadoOperacoes2)+
"\nA subtração é: "+realizaSubtracao(resultadoOperacoes1,resultadoOperacoes2)+
"\nA multiplicação é: "+realizaMultiplicacao(resultadoOperacoes1,resultadoOperacoes2)+
"\nA divisão é: "+realizaDivisao(resultadoOperacoes1,resultadoOperacoes2)+
"\nO resto da divisão é "+realizaResto(resultadoOperacoes1, resultadoOperacoes2))




