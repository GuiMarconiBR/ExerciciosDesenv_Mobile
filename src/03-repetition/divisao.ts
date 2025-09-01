//Problema "divisao" (adaptado de URI 1116)  
/*Escreva  um  algoritmo  que  leia  dois  números  e  imprima  o  resultado  da  divisão  do  primeiro  pelo segundo. Caso não for possível, mostre a mensagem “DIVISAO IMPOSSIVEL”.*/

import promptSync from 'prompt-sync';
const prompt = promptSync();

const qtd = Number(prompt('Quantos casos voce vai digitar? '))
var n = Number(0);
var d = Number(0);
var div = Number(0);
for (let i = 0; i < qtd; i++ ) {
    n = Number(prompt('Entre com o numerador: '));   
    d = Number(prompt('Entre com o denominador: '));
    if (d == 0) {
        console.log('DIVISAO IMPOSSIVEL');
    } else {
        div = n / d;
        console.log(`DIVISAO= ${div.toFixed(2)}`);
    };
};

