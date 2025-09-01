//Problema troco
/*Fazer um programa para calcular o troco no processo de pagamento de um produto de uma mercearia. 
O programa deve ler o preço unitário do produto, a quantidade de unidades compradas deste produto, 
e o valor em dinheiro dado pelo cliente (suponha que haja dinheiro suficiente). Seu programa deve 
mostrar o valor do troco a ser devolvido ao cliente. */

import promptSync from 'prompt-sync';
const prompt = promptSync();

const preco = Number(prompt('Valor do produto: '));
const qtd = Number(prompt('Quantidade do produto: '));
const vCompra = Number(qtd * preco);
const dinheiro = Number(prompt('Qual o valor em dinheiro: '));

const troco = dinheiro - vCompra;

console.log(`TROCO: ${troco}`);

