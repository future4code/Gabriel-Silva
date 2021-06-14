
//EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 
comprarCarta();

console.log("♦♠♥♣ Welcome the game Blackjack ♦♠♥♣\n")
let jogo = confirm("Deseja iniciar uma nova rodada?")

   if (jogo){
   let usuarioCompra1= comprarCarta()
   let usuarioCompra2 = comprarCarta()
   let computadorCompra1 = comprarCarta()
   let computadorCompra2 = comprarCarta()

   let pontuacaoUsuario = usuarioCompra1.valor + usuarioCompra2.valor
   let pontuacaoComputador = computadorCompra1.valor+ computadorCompra2.valor

   console.log(`\nUsuário - cartas: ${usuarioCompra1.texto} ${usuarioCompra2.texto} - Pontuação: ${pontuacaoUsuario} \n`)
   console.log(`\nComputador - cartas: ${computadorCompra1.texto} ${computadorCompra2.texto} - Pontuação: ${pontuacaoComputador} \n`)

   if (pontuacaoUsuario > pontuacaoComputador){
      console.log("\n♥ Usuário venceu!")
   }else if(pontuacaoComputador > pontuacaoUsuario){
      console.log("\n♥ Computador venceu!")
   }else{
      console.log("♦ Empatou!")
   }
    

}  else {
   console.log("♦♠♥♣ O jogo chegou ao fim. ♦♠♥♣")
}