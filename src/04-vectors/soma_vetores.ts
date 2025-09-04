//Problema "soma_vetores"   
//Faça um programa para ler dois vetores A e B, contendo N elementos cada. Em seguida, gere um 
//terceiro vetor C onde cada elemento de C é a soma dos elementos correspondentes de A e B. Imprima 
//o vetor C gerado.

import PromptSync from "prompt-sync";
const prompt = PromptSync();

const a: number[] = [];
const b: number[] = [];
const somaVetores: number[] = [];

const qtd = Number(prompt('Quantos valores vai ter cada vetor? '));

for (let i = 0; i < qtd; i++) {
    let n = Number(prompt('Digite os valores do vetor A: '))

    a.push(n)
};

for (let i = 0; i < qtd; i++) {
    let n = Number(prompt('Digite os valores do vetor B: '));

    b.push(n)
};

for (let i = 0; i < qtd; i++) {
    let soma = a[i]! + b[i]!;
    somaVetores.push(soma)
};

console.log(`VETOR RESULTANTE = ${somaVetores}`);