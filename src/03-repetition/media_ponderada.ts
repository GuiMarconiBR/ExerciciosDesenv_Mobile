//Problema "media_ponderada" (adaptado de URI 1079)  
/*Leia um valor inteiro N, que representa o número de casos de teste que vem a seguir. Cada caso de teste 
consiste de 3 valores reais, para os quais você deverá calcular e mostrar a média ponderada, sendo que 
o primeiro valor tem peso 2, o segundo valor tem peso 3 e o terceiro valor tem peso 5. Vale lembrar 
que a média ponderada é a soma de todos os valores multiplicados pelo seu respectivo peso, dividida 
pela soma dos pesos.*/

import promptSync from 'prompt-sync';
const prompt = promptSync();

const qtd = Number(prompt('Quantos casos voce vai digitar? '))
console.log(' três números')
var n = Number(0); 
var soma = Number(0);
const p1 = Number(2);
const p2 = Number(3);
const p3 = Number(5);

for (let i = 1; i <= qtd; i++) {
    n = Number(prompt('Digite o valor: '))
    if (i == 1) {
        soma = soma + (n * p1);
    } else if (i == 2) {
        soma = soma + (n * p2);
    } else {
        soma = soma + (n * p3);
    };
}
const mp = soma / (p1 + p2 + p3);

console.log(`MEDIA: ${mp.toFixed(1)}`);