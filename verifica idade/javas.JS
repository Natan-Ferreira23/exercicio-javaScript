function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.querySelector('div#resp');

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] verifique os dados e tente novamente ! ')
    }
    else {
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);
        res.innerHTML = ` Idade  calculada: ${idade}`
        var genero = ''
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');
        if (fsex[0].checked) {
            genero = 'homem'
            document.body.style.background = '#6eb8f5';
            img.setAttribute('src', 'homem.png');
        }
        else if (fsex[1].checked) {
            genero = 'mulher';
            document.body.style.background = '#fbd5e5';
            img.setAttribute('src', 'mulher.png');
        }
        res.style.textAlign = 'center';
        res.innerHTML = ` Detectamos ${genero} com ${idade} anos`;
        res.appendChild(img).style.width = '300px';
    }
}