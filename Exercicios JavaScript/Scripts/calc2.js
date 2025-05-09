//importação de biblioteca
const prompt = require('prompt-sync')();
// Declarando as variáveis
let a,b, resultado, sair = 1;

console.log("Bem vindo a calculadora!!!\n");

while(sair != 0){
    let operador = parseInt(prompt("Qual operação você deseja fazer? 1 - Soma; 2 - Subtração  3 - Multiplicação  4 - Divisão"))

    switch(operador){
        case 1:
            a = parseInt(prompt("Digite o primeiro valor:"))
            b = parseInt(prompt("Digite o segundo valor:"))
            resultado = a+b;
            console.log("resultado é ",resultado,"!")
        break;
    
        case 2:
            a = parseInt(prompt("Digite o primeiro valor:"))
            b = parseInt(prompt("Digite o segundo valor:"))
            resultado = a-b;
            console.log("resultado é ",resultado,"!")
        break;
    
        case 3:
            a = parseInt(prompt("Digite o primeiro valor:"))
            b = parseInt(prompt("Digite o segundo valor:"))
            resultado = a*b;
            console.log("resultado é ",resultado,"!")
        break;
    
        case 4:
            a = parseInt(prompt("Digite o primeiro valor:"))
            b = parseInt(prompt("Digite o segundo valor:"))
            resultado = a/b;
            console.log("resultado é ",resultado,"!")
        break;
    
        default:
            console.log("Nenhuma opção valida foi selecionada")
    }

    console.log("Deseja fazer algum cálculo?\n");
    sair = parseInt(prompt("Sim - 1; Não - 0: "))
} 


