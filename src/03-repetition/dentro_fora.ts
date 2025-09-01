//Problema "dentro_fora" (adaptado de URI 1072)  
/*Leia um valor inteiro N. Este valor será a quantidade de valores inteiros X que serão lidos em seguida. 
Mostre quantos destes valores X estão dentro do intervalo [10,20] e quantos estão fora do intervalo, 
conforme exemplo*/

import PromptSync from "prompt-sync";
const prompt = PromptSync();

const x = Number(prompt('Quantos numeros voce vai digitar? '))
var a = Number(0)
var fora = Number(0)
var dentro = Number(0)
for (let i = 1; i <= x; i++) {
    a = Number(prompt('Digite um numero:'))
    if (a < 10 || a > 20) {
        fora++;
    } else {
        dentro++;
    };
};
console.log(`DENTRO: ${dentro}\nFORA: ${fora}`);