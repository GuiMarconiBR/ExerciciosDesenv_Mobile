//Problema "media_idades"   
/*Faça um programa para ler um número indeterminado de dados, contendo cada um, a idade de um 
indivíduo. O último dado, que não entrará nos cálculos, contém um valor de idade negativa. Calcular 
e imprimir a idade média deste grupo de indivíduos. Se for entrado um valor negativo na primeira vez, 
mostrar a mensagem "IMPOSSIVEL CALCULAR".*/

import promptSync from 'prompt-sync';
const prompt = promptSync();

var n = Number(0);
var times = Number(0);
var tot = Number(0);


while (n >= 0){
    n = Number(prompt('Idade: '));
    if (n < 0 && times == 0) {
        console.log('Impossível calcular');
    } else if(n > 0) {
         tot = tot + n;
        times++;
    };
};

if (times > 0) {
    const media = tot / times;
    console.log(`Media : ${media.toFixed(2)}`)
};