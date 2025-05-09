//importação de biblioteca
const prompt = require('prompt-sync')();
// Declarando as variáveis
let nome, b1,b2,b3,b4, media, sair = 1;

console.log("Bem vindo a calculadora de Média!!!\n");

while(sair != 0){
    nome = prompt("Informe o nome do aluno: ")
    
    b1 = parseFloat(prompt("Digite a média do primeiro bimestre: "))
    b2= parseFloat(prompt("Digite a média do segundo bimestre: "))
    b3 = parseFloat(prompt("Digite a média do terceiro bimestre: "))
    b4 = parseFloat(prompt("Digite a média do quarto bimestre: "))
    media = (b1+b2+b3+b4)/4;
    console.log("A média do aluno",nome, "é de:" ,media.toFixed(2),"!")
        
    if(media > 6){        
        console.log("O", nome, "foi aprovado") 
    }else{        
        console.log("O", nome, "foi reprovado")
    }

    console.log("Deseja fazer algum cálculo?\n");
    sair = parseInt(prompt("Sim - 1; Não - 0: "))
}