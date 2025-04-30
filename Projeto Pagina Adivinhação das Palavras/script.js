// Lista de Palavras
let palavras = [
    {palavra: "Gato", dicas: ["pelos", "animal", "ronronar"]},
    {palavra: "Churrasco", dicas: ["tradição gaúcha", "comida", "reunir amigos"]},
    {palavra: "JavaScript", dicas: ["fácil de aprender", "linguagem web", "mais popular no mundo"]},
    {palavra: "Fiat Bravo", dicas: ["carro", "traseira bonita", "T-Jet"]},
]

// Elementos do HTML
let input = document.getElementById("txt_input")
let div_resultado = document.getElementById("resultado")
let paragrafo_dicas = document.getElementById("paragrafo_dicas")
let paragrafo_tentativas = document.getElementById("paragrafo_tentativas")

// Selecionar uma palavra e suas dicas
let palavra_secreta = palavras[Math.floor(Math.random() * palavras.length)]
let palavra_selecionada = palavra_secreta.palavra.toLowerCase()
let dicas = palavra_secreta.dicas
let tentativas = dicas.length

// Função de Adivinhar
function adivinhar() {
    let digitado = input.value.trim().toLowerCase()
    if(digitado == palavra_selecionada) {
        div_resultado.innerHTML = "Acertou !"
    }else{
        tentativas--
        div_resultado.innerHTML = "Errou !"

        if(tentativas > 0) {
            paragrafo_dicas.textContent = "Dica: " + dicas[dicas.length - tentativas]
            paragrafo_tentativas.textContent = "Tentativas: " + tentativas            
        }else{
            location.reload()
        }
    }

}

// Função de Mostrar as Dicas
function mostrar_dica() {
    paragrafo_dicas.textContent = `Dica: ${dicas[0]}`
}