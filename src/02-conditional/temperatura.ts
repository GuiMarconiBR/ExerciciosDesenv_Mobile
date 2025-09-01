//Problema "temperatura"  
/*Problema "temperatura"  
Deseja-se converter uma medida de temperatura da escala Celsius para Fahrenheit ou vice-versa. Para 
isso, você deve construir um programa que leia a letra "C" ou "F" indicando em qual escala vai ser 
informada uma temperatura. Em seguida o programa deve mostrar a temperatura na outra escala com 
duas casas decimais. A seguir é dada a fórmula para converter de Fahrenheit para Celsius.*/

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
