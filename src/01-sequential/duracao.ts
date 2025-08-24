//Problema duracao
/*Fazer um programa para ler uma duração de tempo em segundos, daí imprimir na tela esta duração no 
formato horas:minutos:segundos.*/

import promptSync from 'prompt-sync';
const prompt = promptSync();

const seconds = Number(prompt('Digite a duracao em segundos: '))

const h = Math.floor(seconds / 3600)
const m = Math.floor((seconds % 3600) / 60)
const s = seconds % 60

console.log(`${h.toFixed(0)}h:${m.toFixed(0)}m:${s.toFixed(0)}s`)