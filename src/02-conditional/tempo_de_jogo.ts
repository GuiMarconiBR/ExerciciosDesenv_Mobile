//Problema "tempo_de_jogo" (adaptado de URI 1046)  
/*Leia a hora inicial e a hora final de um jogo. A seguir calcule a duração do jogo, sabendo que o mesmo 
pode começar em um dia e terminar em outro, tendo uma duração mínima de 1 hora e máxima de 24 
horas.*/

import PromptSync from "prompt-sync";
const prompt = PromptSync();

const ini = Number(prompt('Hora inicial: '));
const fim = Number(prompt('Hora final: '));

if (fim > ini) {
    const duracao = fim - ini
    console.log(`O jogo durou ${duracao} horas!`);
}else if (fim <= ini) {
    const duracao = (24 - ini) + fim
    console.log(`O jogo durou ${duracao} horas!`);
};

