//Problema "troco_verificado"  
/*Fazer um programa para calcular o troco no processo de pagamento de um produto de uma mercearia. 
O programa deve ler o preço unitário do produto, a quantidade de unidades compradas deste produto, 
e o valor em dinheiro dado pelo cliente. Seu programa deve mostrar o valor do troco a ser devolvido 
ao cliente. Se o dinheiro dado pelo cliente não for suficiente, mostrar uma mensagem informando o 
valor restante conforme exemplo.*/

import promptSync from 'prompt-sync';
const prompt = promptSync();
const vProd = Number(prompt('Valor unitário do produto: '));
const qtdProd = Number(prompt('Quantidade do produto: '));
const pagamento = Number(prompt('Valor em dinheiro: '));

const conta = vProd * qtdProd;

if(pagamento < conta){
    const vlrFalta = conta - pagamento
    console.log(`O dinheiro entregue, R$${pagamento.toFixed(2)}, não é suficiente. O total é ${conta}! Faltam R$${vlrFalta.toFixed(2)}`);
} else if(pagamento > conta) {
    const troco = pagamento - conta
   console.log(`O dinheiro entregue, R$${pagamento.toFixed(2)}. O total é ${conta}! o troco é R$${troco.toFixed(2)}`)
}