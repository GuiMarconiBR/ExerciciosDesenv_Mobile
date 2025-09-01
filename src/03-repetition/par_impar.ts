//Problema "par_impar" (adaptado de URI 1074)  
/*Leia um valor inteiro N. Este valor será a quantidade de números inteiros que serão lidos em seguida. 
Para cada valor lido, mostre uma mensagem dizendo se este valor lido é PAR ou IMPAR, e também se 
é POSITIVO ou NEGATIVO. No caso do valor ser igual a zero (0), seu programa deverá imprimir 
apenas NULO.*/

import PromptSync from "prompt-sync";
const prompt = PromptSync();

const qtd = Number(prompt('Quantos numeros voce vai digitar? '));
var n = Number(0);
for (let i = 0; i < qtd; i++) {
    n = Number(prompt('Digite um numero: '))
    if (n < 0 && n % 2 == 0) {
        console.log('PAR NEGATIVO')
    } else if (n < 0 && n % 2 != 0) {
        console.log('IMPAR NEGATIVO')
    } else if ( n > 0 && n % 2 == 0) {
        console.log('PAR POSITIVO')
    } else if (n > 0 && n % 2 != 0) {
        console.log('IMPAR POSITIVO')
    } else {
        console.log('NULO')
    }
}