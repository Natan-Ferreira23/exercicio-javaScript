let botao = document.querySelector('.btn');
let inputValue = document.querySelector('input');
let container = document.querySelector('.container-sm');
botao.addEventListener('click', function (event) {
    event.preventDefault();
    criarTarefa();
})

function criarTarefa() {
    let div = document.createElement('div');
    div.classList.add('row');

    let card = document.createElement('div');
    card.classList.add('alert', 'alert-secondary', 'd-flex');

    let tarefa = document.createElement('h2');
    if (inputValue.value != "") {
        tarefa.textContent = inputValue.value;
        inputValue.value = "";
        let col1 = document.createElement('div');
        col1.classList.add('col-md-6');



        let col2 = document.createElement('div');
        col2.classList.add('col-md-6', 'd-flex');
        let iconeEdit = document.createElement('i');
        iconeEdit.classList.add('bi', 'bi-pencil-fill', 'p-2')
        let iconeDelete = document.createElement('i');
        iconeDelete.classList.add('bi', 'bi-trash2-fill', 'p-2');

        col1.appendChild(tarefa);
        col2.appendChild(iconeEdit);
        col2.appendChild(iconeDelete);

        card.appendChild(col1);
        card.appendChild(col2);

        div.appendChild(card);
        container.appendChild(div);

        document.body.appendChild(container);
    } else {
        alert("Digite uma tarefa");
    }

}