# > Exercícios de Fixação de Javascript - Treino 1 🏋🏽‍♀️

## Enunciado

Uma revendedora de carros usados paga a seus vendedores um salário fixo de _R$2000,00_ por mês. Os vendedores recebem uma comissão para cada carro vendido, no valor de _R$100 + 5% do valor do carro_.

Crie uma função que leia o número de carros vendidos por uma pessoa (_qtdeCarrosVendidos_, um número inteiro) e o valor total de suas vendas do mês (_valorTotalVendas_, também um número, correspondente ao valor total recebido por todas as vendas efetuadas).

Retorne o salário final do mês do funcionário com base nesses valores.

### Cógigo:

```Javascript
function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
 // Escreva seu código aqui
  const salarioFixo = 2000
  const comissao = valorTotalVendas * 0.05
  const receitaFinalMes = salarioFixo + comissao + (qtdeCarrosVendidos*100)

  return receitaFinalMes

}
```
