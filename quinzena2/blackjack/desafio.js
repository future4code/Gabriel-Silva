comprarCarta()

console.log("♦♠♥♣ Welcome the game Blackjack ♦♠♥♣")
console.log("\n")
let jogo = confirm("Deseja iniciar uma nova rodada?")



if (jogo){
   let usuarioCompra1= comprarCarta()
   let usuarioCompra2 = comprarCarta()
   if (usuarioCompra1.valor == 11 && usuarioCompra2.valor == 11){comprarCarta()}
   let computadorCompra1 = comprarCarta()
   let computadorCompra2 = comprarCarta()
   if (computadorCompra1 == computadorCompra2){comprarCarta()}
   
   let novaCarta1 = 0
   let totalUsuario = usuarioCompra1.valor + usuarioCompra2.valor + novaCarta1.valor
   let totalComputador = computadorCompra1.valor + computadorCompra2.valor

   novaCarta1 = confirm(`Suas cartas são ${usuarioCompra1.texto} e ${usuarioCompra2.texto} -> (pontuação: ${usuarioCompra1.valor+usuarioCompra2.valor}).\nA carta revelada do computaror é ${computadorCompra1.texto} -> (pontuação: ${computadorCompra1.valor})\n\nDeseja comprar mais uma carta e tentar a sorte?`)
      if(novaCarta1){
      novaCarta1 = comprarCarta()

   if(totalUsuario > 21){ 
      
   console.log(`Seu jogo chegou ao fim!\nSua pontuação foi maior que 21\nSuas cartas foram: ${usuarioCompra1.texto}, ${usuarioCompra2.texto} e ${novaCarta1.texto}\nTotal de ${usuarioCompra1.valor + usuarioCompra2.valor + novaCarta1.valor} pontos.`)
   console.log(`O computador venceu!\nAs cartas foram: ${computadorCompra1.texto} ${computadorCompra2.texto}\nTotal de ${computadorCompra1.valor+computadorCompra2.valor} pontos!`)
   }

}else {
   console.log(`Parabéns! Você venceu! suas cartas foram:\n${totalUsuario}\nSoma do computador:\n${totalComputador}`)
}


}else{
  console.log("♦♠♥♣ O jogo chegou ao fim. ♦♠♥♣")
}