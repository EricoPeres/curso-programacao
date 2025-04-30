let imagens = [
    "Fotos/F1_1.jpg",
    "Fotos/F1_2.jpg",
    "Fotos/F1_3.jpg"
]

let indiceAtual = 0

let imagem = document.getElementById("foto")

function trocarFoto() {
    indiceAtual = (indiceAtual + 1) % imagens.length
    // console.log(indiceAtual)    
    imagem.src = imagens[indiceAtual]
}