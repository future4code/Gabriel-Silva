// EXERCÍCIO 01
function inverteArray(array) {
  //Pensar em outra forma de realizar o código!
  // const inverterArray = array.reverse()
  // return inverterArray
  // resolvido após analisar as dúvidas enviadas no johnson_duvidas
  const arrayInvertido = array.map((valor, i) => array[array.length -1 -i]);
  return arrayInvertido
}

// EXERCÍCIO 02
function retornaNumerosParesElevadosADois(array) {
  let numerosPotencia = []
  for(let i = 0; i < array.length ; i++){
    if (array[i] % 2 === 0 ){
      numerosPotencia.push(array[i]**2)
    }
  }
  return numerosPotencia
}

// EXERCÍCIO 03
function retornaNumerosPares(array) {
  let numerosPares = []
  for(let i = 0; i < array.length ; i++){
    if (array[i] % 2 === 0 ){
      numerosPares.push(array[i])
    }
  }
  return numerosPares
}

// EXERCÍCIO 04
function retornaMaiorNumero(array) {
  let maiorNumero = -Infinity
    for(let i = 0; i < array.length; i++){
    if(array[i]>maiorNumero)
      maiorNumero = array[i]
  }
return maiorNumero
}

// EXERCÍCIO 05
function retornaQuantidadeElementos(array) {
    return array.length
}

// EXERCÍCIO 06
function retornaExpressoesBooleanas() {
const booleano1 = true // V
const booleano2 = false // F
const booleano3 = !booleano2 // V 
const booleano4 = !booleano3 // F
  
  return [false, false, true, true, true]
 
}

// EXERCÍCIO 07
function retornaNNumerosPares(n) {
  let retornaPares = []
  for(let i = 0; i < n; i++){
    retornaPares.push(i*2)
  }
  return retornaPares
}

// EXERCÍCIO 08
function checaTriangulo(a, b, c) {
  // return 'Escaleno'
  // return 'Equilátero'
  // return 'Isósceles'

  if(a && b === c){
    return `Equilátero`
    }else if(a === b || !c){
      return `Isósceles`
       } else if(!a || !b === !c){
           return `Escaleno`
        }
}

// EXERCÍCIO 09
function comparaDoisNumeros(num1, num2) {
  // Formato do objeto a ser retornado:
  // {
  //   maiorNumero: X,
  //   maiorDivisivelPorMenor: Y,
  //   diferenca: Z
  // }

  let maiorNumero = num1
  let maiorDivisivelPorMenor = true
  let diferenca = 0
  
    if(num1>num2){
      maiorNumero = num1
    }else{
      maiorNumero = num2
    }
    
    if(num2%num1 === 0 ){
      maiorDivisivelPorMenor 
    }else{
      maiorDivisivelPorMenor = false
    }

    diferenca = Math.abs(num2 - num1)

    return {"maiorNumero":maiorNumero,"maiorDivisivelPorMenor":maiorDivisivelPorMenor,"diferenca":diferenca}
  }

// EXERCÍCIO 10
function segundoMaiorEMenor(array) {
  //passou apenas no 1º testes

  let novoArray = []
  let maior = -Infinity
  let menor = Infinity

  for(let i = 0; i <= array.length; i++){
    if(array[i] >= maior){
      maior = array[i] -1
    }
  }
  novoArray.push(maior)
  
  for(let i = 0; i < array.length; i++){
    if(array[i] < menor){
      menor = array[i] + 1
    }
  }
  novoArray.push(menor)
  return novoArray
}

// EXERCÍCIO 11
function ordenaArray(array) {
// Exercício resolvido após explicação pelo vídeo: https://www.youtube.com/watch?v=ZYO43bi0IXY (BubbleSorte - demonstração do método da bolha)
// Ajuda tbm do colega Ryan
  let checarTroca = true
  while (checarTroca === true) {
    checarTroca = false
    for (let i = 0; i < array.length; i++) {
      if (array[i] > array[i + 1]) {
        let tempVar = array[i]
        array[i] = array[i + 1]
        array[i + 1] = tempVar
        checarTroca = true
      }
    }
  }
 // console.log(array) // para verificar a saída
  return array
}

// EXERCÍCIO 12
function filmeFavorito() {

  const filmeFavorito = {
    nome: "O Diabo Veste Prada",
    ano: 2006,
    diretor: "David Frankel",
    atores: ["Meryl Streep" , "Anne Hathaway", "Emily Blunt", "Stanley Tucci"]
  }
  return filmeFavorito
}

// EXERCÍCIO 13
function imprimeChamada() {
    // "Venha assistir ao filme NOME_DO_FILME, de ANO, dirigido por DIRECAO e estrelado por ELENCO."
    //Método join(): adciona caractéries ao ser chamado.

    const filmeFavorito = {
      nome: "O Diabo Veste Prada",
      ano: 2006,
      diretor: "David Frankel",
      atores: ["Meryl Streep" , "Anne Hathaway", "Emily Blunt", "Stanley Tucci"]
    }
    return `Venha assistir ao filme ${filmeFavorito.nome}, de ${filmeFavorito.ano}, dirigido por ${filmeFavorito.diretor} e estrelado por ${filmeFavorito.atores.join(", ")}.`
}

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {
  
  const perimetro = 2*(lado1+lado2)
  const area = (lado1*lado2)
  
  return {"largura":lado1,"altura":lado2,"perimetro":perimetro,"area":area}
}

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {
  const novoObjetoAnonimiza ={
    ...pessoa,
    nome: "ANÔNIMO"
  }
  return novoObjetoAnonimiza
}

// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {
  const retornaMaior18 = arrayDePessoas.filter((maioresDe18)=>{
    return maioresDe18.idade >= 18
  })
  return retornaMaior18
}

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {
  const retornaMenores18 = arrayDePessoas.filter((menoresDe18)=>{
   return menoresDe18.idade < 18
  })
  return retornaMenores18
}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {
  let numerosMultiplicados = []
    for(let numeros of array){
      numerosMultiplicados.push(numeros * 2)
  }
  return numerosMultiplicados
}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {
  let numerosMultiplicados = []
  for(let numeros of array){
    numerosMultiplicados.push((numeros * 2).toString())
  }
return numerosMultiplicados
}

// EXERCÍCIO 17C
function verificaParidade(array) {
  const novoArray = array.map((inputArray) => {
    if (inputArray % 2 === 0) {
      return `${inputArray} é par`
    } else {
      return `${inputArray} é ímpar`
    }
  })  
  return novoArray
}

// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {
  const autorizaPessoas = pessoas.filter((inputPessoas)=>{
    if(inputPessoas.idade > 14 && inputPessoas.idade < 60 && inputPessoas.altura > 1.5){
      return inputPessoas
    }
  })
  return autorizaPessoas
}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {
// Dica dos colegas = negar o if do exercício 18A
  const naoAutorizaPessoas = pessoas.filter((inputPessoas)=>{
    if(!(inputPessoas.idade > 14 && inputPessoas.idade < 60 && inputPessoas.altura >= 1.5)){
      return inputPessoas
    }
  })
  return naoAutorizaPessoas
}

// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {
  //Exercício resolvido após explicação do Bruno durante o plantão 19/06/2021
  // Trecho do código https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
  const newArray = consultasNome.sort(function (a, b) {

    if (a.nome > b.nome) {
      return 1;
    }
    if (a.nome < b.nome) {
      return -1;
    }
    // a must be equal to b
    return 0;
  });
return newArray
}

// EXERCÍCIO 19B
//Utilizei o mesmo código do exercício 19A e passou apenas no 1º teste

function ordenaPorData(consultasData) {
    const newArray = consultasData.sort((a, b) => {
       
      if (a.dataDaConsulta > b.dataDaConsulta){
        return -1
      }
      if (a.dataDaConsulta < b.dataDaConsulta){
         return 1
      }else 
        return 0
     });
return newArray
}


  
// EXERCÍCIO 20
function calculaSaldo(contas) {

}
