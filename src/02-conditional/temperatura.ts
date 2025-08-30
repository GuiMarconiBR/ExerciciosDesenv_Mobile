//Problema "Inserir nome do problema"  
/*Inserir descrição deste problema*/

import promptSync from 'prompt-sync';
const prompt = promptSync();

const celcius = String('C');
const fahrenheit = String('F');

const medida = String(prompt('Você vai digitar a temperatura em qual escala (C/F)? ')).toUpperCase();

if (medida == celcius) {
    const c = Number(prompt('Quantos C°? '));
    const f = (c * (9 / 5)) + 32
    console.log('Fahrenheit: ' + f+'°F');
} else {
    const f = Number(prompt('Quantos °F? '));
    const c = (f - 32) * 5/9;
    console.log('celcius: ' + c+'C°');
};
