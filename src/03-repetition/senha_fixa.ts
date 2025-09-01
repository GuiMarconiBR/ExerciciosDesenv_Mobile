//Problema "senha_fixa" (adaptado de URI 1114)  
/*Escreva um programa que repita a leitura de uma senha até que ela seja válida. Para cada leitura de 
senha incorreta informada, escrever a mensagem "Senha Invalida! Tente novamente:". Quando a senha 
for  informada  corretamente  deve  ser  impressa  a  mensagem  "Acesso  Permitido"  e  o  algoritmo 
encerrado. Considere que a senha correta é o valor 2002.*/ 

import promptSync from 'prompt-sync';
const prompt = promptSync();

const senha = Number(2002);

var validacao = Number(prompt('Senha: '));

if (validacao === senha) {
        console.clear();
        console.log('Acesso Permitido');
} else {
    while (validacao != senha ){
        validacao = Number(prompt('Senha Invalida! Tente novamente: '))
        if (validacao === senha) {
            console.clear();
            console.log('Acesso  Permitido');
        };
    };
};

