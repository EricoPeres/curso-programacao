// Elementos HTML
let $tarefa_input = document.getElementById("txt_input")  // $ é a convensão para que tenha um elemento html
let $erro_msg = document.getElementById("erro_msg")
let $tarefas_lista = document.getElementById("tarefas_lista")

function AdicionarTarefa() {
    let tarefa_txt = $tarefa_input.value.trim()  // trim é para tirar os espaços do que digitado no input

    // Criando os elementos
    let $tarefa_item = document.createElement("li")
    // Adicionando conteúdo no elemento
    $tarefa_item.innerText = tarefa_txt
    // Adicionando o elemento na página
    $tarefas_lista.appendChild($tarefa_item)
    // Limpar o input depois de digitado cada valor
    $tarefa_input.value = ""
}