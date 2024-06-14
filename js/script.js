let tarefa = document.getElementById('todo');
let result = document.getElementById('todolist');
let lista = [];

function adicionar(){

    if(tarefa.value.length != 0){

        lista.push(tarefa.value);
        let todolist = document.createElement('p');
        todolist.id = "teste";
        result.appendChild(todolist);
        //Checkbox
        let check = document.createElement("input");
        check.setAttribute("type", "checkbox");
        check.classList.add("checar");
        todolist.appendChild(check);
        //result.appendChild(check);
        check.addEventListener("click", confirm);


        //Input text
        let tarefas = document.createElement('input');
        tarefas.setAttribute('type', 'text');
        tarefas.setAttribute('value', tarefa.value);
        tarefas.innerText = `${tarefa.value}`;
        tarefas.classList.add("list");
        todolist.appendChild(tarefas);
        //result.appendChild(tarefas);

        //button caso tenha inserido errado o todo
        let button = document.createElement('button');
        button.setAttribute("type", "button")
        let clear = document.createTextNode("");
        

        button.addEventListener("click", excluir);

        //button personalizado
        let img = document.createElement("img");
        img.src = "imgs/trash-can.png";
        button.appendChild(img);
        todolist.appendChild(button);



        if(tarefa.value != ""){
            tarefa.value = "";
        }
    }


    else{
        alert('[ERRO] Alguma tarefa precisa ser adicionada.')
    }

}

function confirm(){
    alert("[TESTE] A TAREFA FOI CONCLUÍDA");
    /*
    var confirmado = document.querySelector(".list")
    confirmado.style.color = 'red';
    adicionar();
    */
}


function excluir(){
    let ex = document.getElementById("teste");
    ex.remove();
    //removeChild(ex.ElementChild);
    }

    