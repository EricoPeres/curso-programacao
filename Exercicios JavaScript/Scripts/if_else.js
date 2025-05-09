// alert("Ta funcionando")
let nome, idade, altura, pesoAtual, pesoPretendido, media;

function calcular(){
    
    nome = document.getElementById("nome").value;

    alert(nome)

    idade = parseFloat(document.getElementById('idade').value);
    altura = parseFloat(document.getElementById('altura').value);
    pesoAtual = parseFloat(document.getElementById('pesoAtual').value);
    pesoPretendido = parseFloat(document.getElementById('pesoPretendido').value);

    media = (pesoAtual / (altura * altura));

    document.getElementById('retorno').innerHTML =  nome + ",  o seu IMC é " + media.toFixed(2);

    if (media < 18.5) {
        alert('Êita, tenha cuidado, ' + nome + ', pois o seu IMC está abaixo do normal para quem tem ' + idade + ' anos de idade! Lute para alcançar o seu peso desejado de ' + pesoPretendido + ' quilos');
    }else if (media >= 18.5 && media <= 24.9) {
        alert('Uau, ' + nome + ', o seu IMC está normal para quem tem ' + idade + ' anos de idade! Você está na média para alcançar o seu peso desejado de ' + pesoPretendido + ' quilos');
    }else if (media >= 25 && media <= 29.9) {
        alert('Atenção, ' + nome + ', o seu IMC apresenta sobrepeso para quem tem ' + idade + ' anos de idade! Lute para alcançar o seu peso desejado de ' + pesoPretendido + ' quilos. Seu IMC pode estar relacionado à pressão alta, colesterol alto ou diabetes.');   
    }else if (media >= 30) {
        alert('Cuide-se, ' + nome + ', pois o seu IMC apresenta obesidade para quem tem ' + idade + ' anos de idade! Lute para alcançar o seu peso desejado de ' + pesoPretendido + ' quilos');   
    }
        
}

function calcular_feminino(){
    
    nome = document.getElementById("nome").value;

    alert(nome)

    idade = parseFloat(document.getElementById('idade').value);
    altura = parseFloat(document.getElementById('altura').value);
    pesoAtual = parseFloat(document.getElementById('pesoAtual').value);
    pesoPretendido = parseFloat(document.getElementById('pesoPretendido').value);

    media = (pesoAtual / (altura * altura));

    document.getElementById('retorno').innerHTML =  nome + ",  o seu IMC é " + media.toFixed(2);

    if (media < 19.1) {
        alert('Êita, tenha cuidado, ' + nome + ', pois o seu IMC está abaixo do normal para quem tem ' + idade + ' anos de idade! Lute para alcançar o seu peso desejado de ' + pesoPretendido + ' quilos');
    }else if (media >= 19.2 && media <= 25.8) {
        alert('Uau, ' + nome + ', o seu IMC está normal para quem tem ' + idade + ' anos de idade! Você está na média para alcançar o seu peso desejado de ' + pesoPretendido + ' quilos');
    }else if (media >= 25.9 && media <= 27.3) {
        alert('Atenção, ' + nome + ', o seu IMC apresenta pouco acima do peso para quem tem ' + idade + ' anos de idade! Lute para alcançar o seu peso desejado de ' + pesoPretendido + ' quilos.');
    }else if (media >= 27.4 && media <= 32.3) {
        alert('Atenção, ' + nome + ', o seu IMC apresenta acima do peso para quem tem ' + idade + ' anos de idade! Lute para alcançar o seu peso desejado de ' + pesoPretendido + ' quilos. Seu IMC pode estar relacionado à pressão alta, colesterol alto ou diabetes.');      
    }else if (media >= 32.4) {
        alert('Cuide-se, ' + nome + ', pois o seu IMC apresenta obesidade para quem tem ' + idade + ' anos de idade! Lute para alcançar o seu peso desejado de ' + pesoPretendido + ' quilos');   
    }
        
}