let botao = document.getElementById('botao');
let nome = document.getElementById('nome');
let email = document.getElementById('email');
let celular = document.getElementById('celular');
botao.addEventListener('click', (e) => {
    e.preventDefault();
    if (!verificaVariaveis()) return;
    adicionar();
});

function adicionar() {
    let tbody = document.getElementsByTagName('tbody')[0];
    let texto
    let tr = document.createElement('tr');

    let td2 = document.createElement('td');
    let td3 = document.createElement('td');
    let th = document.createElement('th');
    th.setAttribute("scope", "row");
    texto = document.createTextNode(nome.value);
    th.appendChild(texto);

    texto = document.createTextNode(email.value);
    td2.appendChild(texto);
    texto = document.createTextNode(celular.value);
    td3.appendChild(texto);

    tr.appendChild(th);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tbody.appendChild(tr);
}
function verificaVariaveis() {
    if (nome.value === "") {
        console.log('Campo nome não deve ser vazio');
        return false
    }
    if (email.value === "") {
        console.log("Campo email não deve ser vazio");
        return false;
    }
    if (celular.value === "") {
        console.log("Campo celular não deve ser vazio");
        return false;
    }
    return true;
}