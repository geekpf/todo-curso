let botao = document.getElementById('adicionar-tarefa')
let inputTarefa = document.querySelector('#tarefa-digitada')
let divTarefas =  document.querySelector('#tarefas')

function acaoFinalizarTarefa(){
   let listaDeBotoes = document.querySelectorAll('botao-tarefa') 
   for (let i = 0; i < listaDeBotoes.length; i++){
       let button = listaDeBotoes[i];

       button.addEventListener('click', function(){
           button.parentElement.parentElement.remove()
       })
   }
}

function criarTarefa(){
    if(inputTarefa.value == ""){
        return alert("Tarefa não pode ser vazia")
    }
    let tarefa = `
    <div id="tarefas" class="col-lg-12 row">
                <div class="col-md-4 mb-4">
                    <div class="card-tarefa">
                        <div class="texto-tarefa">
                            ${inputTarefa.value}
                        </div>
                        <div class="botao-tarefa">
                             <img src="img/check.png" width="32" alt="Botão para finalizar tarefa" title="Botão para finalizar tarefa">
                        </div>
                    </div>
            </div>
    `
    divTarefas.innerHTML += tarefa
    inputTarefa.value=""
    //alert("Tarefa Criada = " + inputTarefa.value)
    acaoFinalizarTarefa()
}


botao.onclick = criarTarefa
inputTarefa.addEventListener('keypress', function(event){
    if(event.key == "Enter"){
        criarTarefa()
    }
    })