//importação de biblioteca
const prompt = require('prompt-sync')();

console.log("Bem vindo a calculadora!!!\n");
let a,b, resultado;
let operador = parseInt(prompt("Qual operação você deseja fazer? 1 - Soma; 2 - Subtração  3 - Multiplicação  4 - Divisão"))

// exemplo com if else

// if(operador == 1){
// a = parseInt(prompt("Digite o primeiro valor:"))
// b = parseInt(prompt("Digite o segundo valor:"))
// resultado = a+b;
// console.log("resultado é ",resultado,"!")
// }
// if(operador == 2){
//     a = parseInt(prompt("Digite o primeiro valor:"))
//     b = parseInt(prompt("Digite o segundo valor:"))
//     resultado = a-b;
//     console.log("resultado é ",resultado,"!")
//     }
//     if(operador == 3){
//         a = parseInt(prompt("Digite o primeiro valor:"))
//         b = parseInt(prompt("Digite o segundo valor:"))
//         resultado = a/b;
//         console.log("resultado é ",resultado,"!")
//         }
//         if(operador == 4){
//             a = parseInt(prompt("Digite o primeiro valor:"))
//             b = parseInt(prompt("Digite o segundo valor:"))
//             resultado = a*b;
//             console.log("resultado é ",resultado,"!")
//             }


// else{
//     console.log("Nenhuma opção valida foi selecionada")
// }

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