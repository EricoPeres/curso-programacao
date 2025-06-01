// Elementos HTML
let $input = document.querySelector("#input")
let $pokemon_name = document.getElementById("pokemon_name")
let $pokemon_height = document.getElementById("pokemon_height")
let $pokemon_weight = document.getElementById("pokemon_weight")
let $pokemon_abt = document.getElementById("pokemon_abilities")
let $pokemon_img = document.getElementById("imagem_pokemon")
let $form = document.querySelector("#submit_form")

// Requisição - fetch da API
async function fetchPokemon(pokemon) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)

    if(response.status === 200) {
        let pokemon_obj = await response.json()
        console.log(pokemon_obj)
        return pokemon_obj
    }
}

// Exibir HTML
async function mostrarPokemon(pokemon) {
    let pokemon_dados = await fetchPokemon(pokemon)
    
    if(pokemon_dados){
        $pokemon_name.innerText = pokemon_dados.name
        $pokemon_img.src = pokemon_dados.sprites.front_default
        $pokemon_weight.innerText = pokemon_dados.weight    // fazer a formação de string
        $pokemon_height.innerText = pokemon_dados.height    // fazer a formação de string
        $pokemon_abt.innerText = pokemon_dados.abilities.length // fazer um do while para cada item da lista
    }
}

// Função para monitorar o HTML
$form.addEventListener('submit', (event) => {
    event.preventDefault()
    mostrarPokemon($input.value.toLowerCase())

})