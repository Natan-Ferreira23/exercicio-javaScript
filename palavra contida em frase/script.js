let botao = document.querySelector("#botao");
let frase = document.querySelector("#frase");
let palavra = document.querySelector("#palavra");
let resposta = document.querySelector("#resposta");

botao.addEventListener('click', (event) => {
    event.preventDefault();
    let array = frase.value.split(" ");
    let cont = verifica(array);
    if (cont == 0) {
        resposta.innerHTML = "A palavra não está contida na frase";
    } else {
        resposta.innerHTML = "A palavra  está contida na frase e aparece : " + cont + " vezes";

    }
})

function verifica(array) {
    let cont = 0;
    array.forEach(element => {
        if (palavra.value == element && palavra.value != "") {
            cont++;
        }
    });
    return cont;
}