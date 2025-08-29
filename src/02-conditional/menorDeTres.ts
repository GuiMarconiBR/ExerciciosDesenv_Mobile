//Problema menor de três
/*Fazer um programa para ler três números inteiros. Em seguida, mostrar qual o menor dentre os três 
números lidos. Em caso de empate, mostrar apenas uma vez*/

import promptSync from 'prompt-sync';
const prompt = promptSync();

const n1 = Number(prompt('primeiro valor:'))
const n2 = Number(prompt('Segundo Número:'))
const n3 = Number(prompt('Terceiro Número:'))

if(n1 < n2 && n1 < n3) {
    console.log(`O menor número é: ${n1}`)
} else if(n2 < n1 && n2 < n3) {
    console.log(`O menor número é: ${n2}`)
} else {
    console.log(`O menor número é: ${n3}`)
}