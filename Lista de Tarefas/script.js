// Elementos HTML
let $tarefa_input = document.getElementById("txt_input")  // $ é a convensão para que tenha um elemento html
let $erro_msg = document.getElementById("erro_msg")
let $tarefas_lista = document.getElementById("tarefas_lista")
let $btn_add_tarefa = document.getElementById("btn_addTarefa")

CarregarTarefas()

$btn_add_tarefa.addEventListener('click', () => {
    let tarefa_txt = $tarefa_input.value.trim()  // trim é para tirar os espaços do que digitado no input
    if(tarefa_txt !== "") {
        AdicionarTarefa(tarefa_txt)
        $tarefa_input.value = ""
    }else{
        $erro_msg.textContent = "Digite uma tarefa!"
    }
})

function AdicionarTarefa(texto, completada = false) {
    
    $erro_msg.textContent = ""

    // Criando os elementos
    let $tarefa_item = document.createElement("li")
    let $btn_completar = document.createElement("button")
    let $btn_deletar = document.createElement("button")

    // Adicionando conteúdo no elemento    
    $btn_completar.innerText = "Completa"        
    $btn_deletar.innerText = "Deletar"
    $tarefa_item.innerText = texto

    // Adicionando o elemento na página        
    $tarefa_item.appendChild($btn_completar)
    $tarefa_item.appendChild($btn_deletar)
    $tarefas_lista.appendChild($tarefa_item)

    if(completada) {
        $tarefa_item.classList.add("completa")
    }

    // Tarefa concluída
    $btn_completar.addEventListener('click', () => {
        $tarefa_item.classList.add("completa")
        SalvarTarefa()
    })
        
    // Deletar a tarefa
    $btn_deletar.addEventListener('click', () => {
        $tarefa_item.remove()
        SalvarTarefa()
    })

    $tarefa_input.value = ""
    SalvarTarefa() 

}

function SalvarTarefa() {
    let tarefas = []
    $tarefas_lista.querySelectorAll('li').forEach( (li) => {   // forEach: executar para cada item da lista
        tarefas.push({
            texto: li.firstChild.textContent,
            completada: li.classList.contains('completa')
        })
    })

    localStorage.setItem('tarefa', JSON.stringify(tarefas))
}

function CarregarTarefas() {
    let tarefas = JSON.parse(localStorage.getItem('tarefa'))   // transformar uma string em um objeto
    tarefas.forEach( tarefa => {
        AdicionarTarefa(tarefa.texto, tarefa.completada)
    })
}