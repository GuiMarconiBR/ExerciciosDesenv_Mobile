//Problema "sequencia_impares" (adaptado de URI 1067)  
/*Leia um valor inteiro X. Em seguida mostre os ímpares de 1 até X, um valor por linha, inclusive o X, 
se for o caso.*/

import PromptSync from "prompt-sync";
const prompt = PromptSync();

var x = Number(prompt('Digite o valor de X: '))

for (let i = 1; i <= x; i++ ) {
    if (i % 2 !== 0) {
        console.log(i)
    };
};