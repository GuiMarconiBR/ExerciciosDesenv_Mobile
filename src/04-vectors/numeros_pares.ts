//Problema "numeros_pares"   
/*Faça um programa que leia N números inteiros e armazene-os em um vetor. Em seguida, mostre na tela 
todos os números pares, e também a quantidade de números pares.*/

import promptSync from 'prompt-sync';
const prompt = promptSync();

const numeros: number[] = [];

const qtd = Number(prompt('Quantos números vai digitar? '));

for (let i = 0; i < qtd; i++) {

    let n = Number(prompt('Digite um numero: '));

    numeros.push(n);
};

let soma = Number(0);

for (let i of numeros) {
    if(i % 2 == 0) {
        console.log(`NÚMEROS PARES:`);
        console.log(`${i}\n`);
         soma = soma + 1
    };
};

console.log(`QUANTIDADE DE PARES = ${soma}`);