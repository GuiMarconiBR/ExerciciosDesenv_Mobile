//Proble retangulo
/*Fazer um programa para ler as medidas da base e altura de um retângulo. Em seguida, mostrar o valor 
da área, perímetro e diagonal deste retângulo, com quatro casas decimais. */

import promptSync from 'prompt-sync';
const prompt = promptSync();


const base = Number(prompt('Infomre a base do retangulo: '))
const altura = Number(prompt('Informe a altura do retagulo: '))
const area = base * altura
const p = 2*(base + altura)
const d = Math.sqrt(base**2 + altura**2)

console.log(`O valor da área do retangulo é ${area.toFixed(4)}`)
console.log(`O perímetro do retangulo é ${p.toFixed(4)}`)
console.log(`A diagonal é ${d.toFixed(4)}`)