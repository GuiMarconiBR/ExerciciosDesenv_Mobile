//Problema "crescente" (adaptado de URI 1113)   
/*Leia uma quantidade indeterminada de duplas de valores inteiros X e Y. Escreva para cada X e Y uma 
mensagem  que  indique  se  estes  valores  foram  digitados  em  ordem  crescente  ou  decrescente.  O 
programa deve finalizar quando forem digitados dois valores iguais.*/

import promptSync from 'prompt-sync';
const prompt = promptSync();

do {
     var x = Number(prompt('X: '));
     var y = Number(prompt('Y: '));
     if (x == y) {
        console.log('Programa finalizado !!!')
     } else if(x > y) {
        console.log('Descrescente!')
     } else {
        console.log('Crescente!')
     };
} while(x != y);