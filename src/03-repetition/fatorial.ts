//Problema "fatorial" (adaptado de URI 1153)  
/*Fazer um programa para ler um número natural N (valor máximo: 15), e depois calcular e mostrar o 
fatorial de N.*/

import promptSync from 'prompt-sync';
const prompt = promptSync();

var n = Number(prompt('Digite o valor de N: '))
var fat = Number(1);
for (let i = n; i >= 1; i--) {
    fat = fat * i;
    
};

console.log(`Fatorial= ${fat}`);