// EXERCÍCIO 01
function inverteArray(array) {
  //Pensar em outra forma de realizar o código!
  const inverterArray = array.reverse()
  return inverterArray
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

// a) `booleano1 && booleano2 && !booleano4` 
  //    false pois há dois falses - operador && basta apenas um false
// b) `(booleano1 && booleano2) || !booleano3` 
  //    false pois há apenas um false - o booleano3 está em negação, tornando assim a compareção em false
// c)  `(booleano2 || booleano3) && (booleano4 || booleano1)` 
  //    true
// d) `!(booleano2 && booleano3) || !(booleano1 && booleano3)` 
  //    true 
// e) `!(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3)`
  //    true 

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
}

// EXERCÍCIO 09
function comparaDoisNumeros(num1, num2) {
  // Formato do objeto a ser retornado:
  // {
  //   maiorNumero: X,
  //   maiorDivisivelPorMenor: Y,
  //   diferenca: Z
  // }
}

// EXERCÍCIO 10
function segundoMaiorEMenor(array) {

}

// EXERCÍCIO 11
function ordenaArray(array) {

}

// EXERCÍCIO 12
function filmeFavorito() {

}

// EXERCÍCIO 13
function imprimeChamada() {
  // "Venha assistir ao filme NOME_DO_FILME, de ANO, dirigido por DIRECAO e estrelado por ELENCO."
}

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {

}

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {

}

// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {

}

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {

}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {

}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {

}

// EXERCÍCIO 17C
function verificaParidade(array) {

}

// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {

}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {

}

// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {

}

// EXERCÍCIO 19B
function ordenaPorData(consultasData) {

}

// EXERCÍCIO 20
function calculaSaldo(contas) {

}
