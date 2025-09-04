  
//Problema "maior_posicao"   
/*Faça um programa que leia N números reais e armazene-os em um vetor. Em seguida, mostrar na tela 
o maior número do vetor (supor não haver empates). Mostrar também a posição do maior elemento, 
considerando a primeira posição como 0 (zero).*/

import PromptSync from "prompt-sync";
const prompt = PromptSync();

const numeros: number[] = [];

const qtd = Number(prompt('Quantos números irá inserir? '));

for (let i = 0; i < qtd; i++) {
    let n = Number(prompt('Digite um numero: '));

    numeros.push(n);
};

let comparador = Number(0);
let contador = Number(0);
for (let i of numeros) {
    if (i > comparador) {
        comparador = i;
        contador = contador + 1
    };
};

console.log(`MAIOR VALOR = ${comparador}`)
console.log(`POSIÇÃO DO MAIOR VALOR: ${contador}º`)

