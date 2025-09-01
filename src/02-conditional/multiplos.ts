//Problema "multiplos" (adaptado de URI 1044)  
/*Fazer um programa para ler dois números inteiros, e dizer se um número é múltiplo do outro. Os 
números podem ser digitados em qualquer ordem.*/

import promptSync from 'prompt-sync';
const prompt = promptSync();

const n1 = Number(prompt(''))
const n2 =Number(prompt(''))

if(n1 % n2 == 0 || n2 % n1 == 0) {
    console.log('São multiplos!');
} else {
    console.log('Não são multiplos');
};