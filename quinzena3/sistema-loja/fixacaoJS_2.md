# Exercícios de Fixação de Javascript - Treino 2 🏋🏽‍♀️

## Enunciado

As maçãs custam R$ 1,30 cada se forem compradas menos de uma dúzia e R$ 1,00 se forem compradas pelo menos 12.

Escreva uma função receba o número de maçãs compradas, calcule e retorne o custo total da compra.

### Código:

```Javascript
function calculaPrecoTotal(quantidade) {
  // Escreva seu código aqui
  let custoTotal

if (quantidade < 12){
  custoTotal = quantidade*1.30
}else if (quantidade >= 12){
  custoTotal = quantidade*1
}
return custoTotal
}
```
