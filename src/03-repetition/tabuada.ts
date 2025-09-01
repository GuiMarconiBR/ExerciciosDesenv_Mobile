//Problema "tabuada"    
//Ler um número inteiro N, daí mostrar na tela a tabuada de N para 1 a 10, conforme exemplo.

import PromptSync from "prompt-sync";
const prompt = PromptSync();

const n = Number(prompt('Deseja a tabuada para qual valor? '))

for (let cont = 0; cont <=10; cont++ ) {
    console.log(`${n} x ${cont} = ${n * cont}`) ;
};


