//Problema "validacao_de_nota" (adaptado de URI 1117)  
/*Faça um programa que leia as notas referentes às duas avaliações de um aluno. Calcule e imprima a 
média semestral. Faça com que o algoritmo só aceite notas válidas (uma nota válida deve pertencer ao 
intervalo [0,10]). Cada nota deve ser validada separadamente.*/

import promptSync from 'prompt-sync';
const prompt = promptSync();

var a1 = Number(prompt('Avaliação 1: '));
while(a1 < 0 || a1 > 10) {
    a1 = Number(prompt('Valor inválido! Tente Novamente: '));
};
var a2 = Number(prompt('Avaliação 2: '));
while(a2 < 0 || a2 > 10) {
    a2 = Number(prompt('Valor inválido! Tente Novamente: '));
};

const media = (a1 + a2) / 2;
console.log(`MEDIA: ${media}`)

