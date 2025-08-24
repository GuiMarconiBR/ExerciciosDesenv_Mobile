//Problema troco
/*Fazer um programa para calcular o troco no processo de pagamento de um produto de uma mercearia. 
O programa deve ler o preço unitário do produto, a quantidade de unidades compradas deste produto, 
e o valor em dinheiro dado pelo cliente (suponha que haja dinheiro suficiente). Seu programa deve 
mostrar o valor do troco a ser devolvido ao cliente. */

import promptSync from 'prompt-sync';
const prompt = promptSync();
const limpar = console.clear;

const preco = Number(prompt('Valor do produto: '))
const tipo = typeof preco
const qtd = Number(prompt('Quantidade do produto: '))
const vCompra = Number(qtd * preco)
const dinheiro = Number(prompt('Qual o valor em dinheiro: '))

if(dinheiro > vCompra) {
    const troco = dinheiro - vCompra
    console.log('Troco:' + troco.toFixed(2))
}else if (dinheiro < vCompra ) {
    const troco = vCompra - dinheiro
    console.log(`O valor total da compra é R$${vCompra} reais.Você pagou apenas R$${dinheiro.toFixed(2)} reais. Por gentileza, pague os R$${troco.toFixed(2)} reais que faltam para finalizarmos o pagamento das suas compras!`)
}