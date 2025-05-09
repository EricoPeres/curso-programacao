// URL da API
const URL_FATOS = 'https://catfact.ninja/fact'
const URL_FOTOS = 'https://api.thecatapi.com/v1/images/search'

// Elementos HTML
let $fatos_p = document.getElementById("facts")
let $btn_pegar_fatos = document.getElementById("btn_get_facts")
let $foto = document.getElementById("foto")
let $text_length = document.querySelector('#tamanho_texto') // posso escolher entre id ou class, . é classe, # é id
let $foto_altura = document.getElementById("altura_foto")
let $foto_largura = document.getElementById("largura_foto")

$btn_pegar_fatos.addEventListener('click', async () => {    // async é para uma função assincrona 
    // Loading
    $fatos_p.innerText = "Carregando..."
    $foto.style.width = 'clamp(150px, 30%, 400px)'
    $foto.style.height = 'clamp(300px, 10%, 600px)'
    $foto.src = 'loading.gif'
    
    // Requisição dos Fatos
    let fato_response
    let fato_obj
    do {  // para pegar somente fatos menores que 180
        fato_response = await (fetch(URL_FATOS))   // await é para esperar que a resposta dar certo
        fato_obj = await (fato_response.json())
    } while (fato_obj.length > 180);    

    // Requisição das Fotos
    let foto_response = await (fetch(URL_FOTOS))   // await é para esperar que a resposta dar certo
    let foto_obj = await (foto_response.json())

    // console.log(foto_obj)
    // Mostrar na página os objetos requisitados
    let fato = fato_obj.fact.trim()        // pegar o fact do objeto
    let tamanho_texto = fato_obj.length
    let altura_foto = foto_obj[0].height
    let largura_foto = foto_obj[0].width

    $fatos_p.innerText = fato
    $text_length.innerText = "Total de caracteres: " + tamanho_texto
    $foto.src = foto_obj[0].url             // pegar na requisição o indice e a url de cada foto
    $foto_altura.innerText = "Altura Foto " + altura_foto + " px"
    $foto_largura.innerText = "Largura Foto " + largura_foto + " px"
    $foto.style.width = largura_foto    // pegar a largura da foto e aplicar estilo com base nesse parâmetro
    $foto.style.height = altura_foto
})
