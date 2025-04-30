let input = document.getElementById("txt_input");
let div_resultado = document.getElementById("resultado");
let palavra_secreta = "Gato";
let tentativasErradas = 0;
let imagem = "gato.jpg"

function adivinhar() {
    let digitado = input.value;
    if (digitado === palavra_secreta) {
        div_resultado.innerHTML = '<h2>Acertou!</h2>';
        
        // Cria o elemento de imagem
        let img = document.createElement("img");
        img.src = imagem;
        img.alt = "Gato";
        
        // Adiciona a imagem ao resultado
        div_resultado.appendChild(img);

        tentativasErradas = 0; // zera tentativas após acerto
    } else {
        tentativasErradas++;
        let mensagem = '<h2>Você Errou !!</h2>';
        
        if (tentativasErradas >= 3) {
            mensagem += '<p>Dica: É um animal que mia.</p>';
        }

        div_resultado.innerHTML = mensagem;
    }
}
