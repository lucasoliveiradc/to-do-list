let tarefa = document.getElementById('todo');
let result = document.getElementById('todolist');
let lista = [];

function adicionar(){

    if(tarefa.value.length != 0){

        lista.push(tarefa.value);
        let check = document.createElement("input");
        check.setAttribute("type", "checkbox");
        result.appendChild(check);

        let tarefas = document.createElement('input');
        tarefas.setAttribute('type', 'text');
        tarefas.setAttribute('value', tarefa.value);
        tarefas.innerText = `${tarefa.value}`
        
        result.appendChild(tarefas);

        if(tarefa.value != ""){
            tarefa.value = "";
        }
    }


    else{
        alert('[ERRO] Alguma tarefa precisa ser adicionada.')
    }
    
}
