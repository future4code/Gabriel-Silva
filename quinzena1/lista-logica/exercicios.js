// Exemplos

// Exercício 0A
function soma() {
  // escreva seu código aqui
  const num1 = prompt('Digite o primeiro número')
  const num2 = prompt('Digite o segundo número')

  console.log(Number(num1) + Number(num2))
}

// Exercício 0B
function imprimeMensagem() {
  // escreva seu código aqui
  const mensagem = prompt('Digite sua mensagem')

  console.log(mensagem)
}

// ---------------------------------------------------
// Exercícios

// Exercício 1
function calculaAreaRetangulo() {
  const altura = prompt("Informe a altura do retangulo")
  const largura = prompt("Informe a largura do retangulo")
  console.log(altura * largura)
}

// Exercício 2
function imprimeIdade() {
  const anoAtual = prompt("Informe o ano atual")
  const anoNascimento = prompt("Informe o ano em que nasceu")
  console.log(anoAtual-anoNascimento)
}

// Exercício 3
function calculaIMC() {
  const peso = prompt("Informe o peso")
  const altura = prompt("Informe sua altua")
  console.log(peso/(altura*altura))
}

// Exercício 4
function imprimeInformacoesUsuario() {
  const nome = prompt("Informe seu nome")
  const idade = Number(prompt("Informe sua idade"))
  const email = prompt("Informe seu email")
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// Exercício 5
function imprimeTresCoresFavoritas() {
  let favorita = []
  let cor1 = prompt("Cor favorita 1")
  let cor2 = prompt("Cor favorita 2")
  let cor3 = prompt("Cor favorita 3")
  favorita.push(cor1,cor2,cor3)
  console.log(favorita)
  }

// Exercício 6
function retornaStringEmMaiuscula() {
  const string = prompt("Digite um texto")
  console.log(string.toUpperCase())
}

// Exercício 7
function calculaIngressosEspetaculo() {
  const custoEspetaculo = Number(prompt("Custo do espetaculo"))
  const custoIngresso = Number(prompt("Custo do ingresso"))
  console.log(custoEspetaculo/custoIngresso)
}

// Exercício 8
function checaStringsMesmoTamanho() {
  const string1 = prompt("Escreva uma palavra")
  const string2 = prompt("Escreva outra palavra")
  console.log(string1.length == string2.length)
}

// Exercício 9
function checaIgualdadeDesconsiderandoCase() {
  const string1 = prompt("Informe uma frase")
  const string2 = prompt("Informe outra frase")
  console.log(string1.toUpperCase() == string2.toUpperCase())
}

// Exercício 10
function checaRenovacaoRG() {
  const anoAtual = Number(prompt("Informe o ano atual"))
  const anoNascimento = Number(prompt("Informe o ano de nascimento"))
  const anoEmissaoDocumento = Number(prompt("Informe o ano da emissao do documento"))
  const idade = anoAtual - anoNascimento
  const renovacao = anoAtual - anoEmissaoDocumento
  console.log((idade <= 20 && renovacao >= 5 ) || (idade > 20 && idade <=50 && renovacao >= 10) || (idade > 50 && renovacao >=15))
  }

// Exercício 11  
function checaAnoBissexto() {
  const anoBisexto = Number(prompt("Informe um ano para verificar se é bisexto"))
  console.log((anoBisexto % 4 == 0) && (anoBisexto % 100 !=0) || (anoBisexto % 400 == 0))
}

// Exercício 12
function checaValidadeInscricaoLabenu() {
  const maior18 = prompt("É maior de 18 anos?")
  const ensinoMedio = prompt("tem ensino medio completo?")
  const disponibilade = prompt("Tem disponibilidade de horário?")


}