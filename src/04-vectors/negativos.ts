//Problema "negativos"   
/*Faça um programa que leia um número inteiro positivo N (máximo = 10) e depois N números inteiros 
e armazene-os em um vetor. Em seguida, mostrar na tela todos os números negativos lidos.*/

import promptSync from 'prompt-sync';
const prompt = promptSync();

const qtd = Number(prompt('Quantos numeros voce vai digitar? '));
let valores: number[] = [];
var n = Number(0);
for (let i = 1; i <= qtd; i++) {
    n = Number(prompt('Digite um numero: '));
    valores.push(n);
};

console.log(`Valores digitados: ${valores}`)

for (let i of valores) {
    if (i < 0) {
        console.log(i)
    }
};

