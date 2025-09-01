//Problema "dardo"  
/*No arremesso de dardo, o atleta tem três chances para lançar o dardo à maior distância que conseguir. 
Você deve criar um programa para, dadas as medidas das três tentativas de lançamento, informar qual 
foi a maior.*/

import promptSync from 'prompt-sync';
const prompt = promptSync();

const a1 = Number(prompt('Primeiro arremesso: '));
const a2 = Number(prompt('Segundo Arremesso: '));
const a3 = Number(prompt('Terceiro Arremesso: '));

if (a1 > a2 && a1 > a3) {
    console.log(`Maior distância: ${a1}`)
} else if (a2 > a1 && a2 > a3) {
    console.log(`Maior distância: ${a2}`)
} else if(a3 > a1 && a3 > a2) {
    console.log(`Maior distância: ${a3}`)
} else if (a1 == a2 && a3 < a1 ) {
    console.log(`Maior distância: ${a1}`)
}else if(a2 == a3 && a1 < a2){
    console.log(a2)
} else if (a3 == a1 && a2 < a3) {
    console.log(`Maior distância: ${a3}`)
} else {
    console.log(`Maior distância: ${a3}`)
};
