const URL = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
let pokemon

// Elementos HTML
let $input = document.querySelector("#input")
let $pokemon_imagem = document.querySelector()
let $pokemon_name = document.getElementById("pokemon_name")

// Requisição
let pokemon_response = await (fetch(URL))
let pokemon_obj = await (pokemon_response.json())

//console.log(pokemon)
// Exibir HTML
