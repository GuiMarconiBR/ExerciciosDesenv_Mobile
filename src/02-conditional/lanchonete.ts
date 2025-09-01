//Problema "lanchonete" (adaptado de URI 1038)  
/*Uma lanchonete possui vários produtos. Cada produto possui um código 
e  um  preço.  Você  deve  fazer  um  programa  para  ler  o  código  e  a 
quantidade comprada de um produto (suponha um código válido), e daí 
informar qual o valor a ser pago, com duas casas decimais, conforme 
tabela de produtos ao lado.*/

import promptSync from 'prompt-sync';
const prompt = promptSync();

const one = Number('5.00');
const two = Number('3.50');
const three = Number('4.80');
const four = Number('8.90');
const five = Number('7.32');

console.log('Bem vindo(a) a Lanchonete.\nAqui está nosso cardápio\n')

console.log('-----------------------------');
console.log('| Produto | Preço do produto |');
console.log('-----------------------------');
console.log('|    1    |      R$5.00      |');
console.log('-----------------------------');
console.log('|    2    |      R$3,50      |');
console.log('-----------------------------');
console.log('|    3    |      R$4,80      |');
console.log('-----------------------------');
console.log('|    4    |      R$8,90      |');
console.log('-----------------------------');
console.log('|    5    |      R$7,32      |');
console.log('-----------------------------');

const prod = Number(prompt('Qual produto você deseja: '));
const qtd = Number(prompt('Informe a quantidade: '));

if (prod == 1) {
    const total = qtd * one;
    console.log(`Você escolheu o produto ${prod} e pediu ${qtd} unidade(s).\nTotal: R$${total.toFixed(2)}`);
} else if (prod == 2) {
    const total = qtd * two;
    console.log(`Você escolheu o produto ${prod} e pediu ${qtd} unidade(s).\nTotal: R$${total.toFixed(2)}`);
} else if (prod == 3) {
    const total = qtd * three;
    console.log(`Você escolheu o produto ${prod} e pediu ${qtd} unidade(s).\nTotal: R$${total.toFixed(2)}`);
} else if (prod == 4) {
    const total = qtd * four;
    console.log(`Você escolheu o produto ${prod} e pediu ${qtd} unidade(s).\nTotal: R$${total.toFixed(2)}`);
} else if(prod == 5) {
    const total = qtd * five;
    console.log(`Você escolheu o produto ${prod} e pediu ${qtd} unidade(s).\nTotal: R$${total.toFixed(2)}`);
} else {
    console.log('O produto não existe! Tente novamente!');
};