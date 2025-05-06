// Elementos HTML
let $tarefa_input = document.getElementById("txt_input")  // $ é a convensão para que tenha um elemento html
let $erro_msg = document.getElementById("erro_msg")
let $tarefas_lista = document.getElementById("tarefas_lista")

function AdicionarTarefa() {
    $erro_msg.textContent = ""
    let tarefa_txt = $tarefa_input.value.trim()  // trim é para tirar os espaços do que digitado no input

    
    if(tarefa_txt !== "") {
        // Criando os elementos
        let $tarefa_item = document.createElement("li")
        let $btn_completar = document.createElement("button")
        let $btn_deletar = document.createElement("button")

        // Adicionando conteúdo no elemento
        $tarefa_item.innerText = tarefa_txt
        $btn_completar.innerText = "Completar"        
        $btn_deletar.innerText = "Deletar"

        // Adicionando o elemento na página
        $tarefa_item.appendChild($btn_deletar)
        $tarefa_item.appendChild($btn_completar)
        $tarefas_lista.appendChild($tarefa_item)

        // Limpar o input depois de digitado cada valor
        $btn_completar.addEventListener("click", () => 
        $tarefa_item.classList.add("completar"))
            
        //deletar
        $btn_deletar.addEventListener('click', () => $tarefa_item.remove())
        $tarefa_input.value = "" 

    }else{
        $erro_msg.textContent = "Digite uma tarefa!"
    }

}