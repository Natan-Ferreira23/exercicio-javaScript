let btn = document.getElementById('botao');
let sol = document.getElementById("sol");
let lua = document.getElementById("lua");
let periodo = 0;
btn.addEventListener("click", (event) => {
    event.preventDefault()
    if (periodo == 0) { //dia
        periodo = 1;
        document.body.style.background = "rgb(63, 145, 228)";
        sol.style.display = 'block';
    } else if (periodo == 1) { //noite
        periodo = 2;
        document.body.style.background = "rgb(47, 76, 156)";
        sol.style.display = 'none';
        lua.style.display = 'block';
    } else { //dia
        periodo = 1;
        document.body.style.background = "rgb(63, 145, 228)";
        lua.style.display = 'none';
        sol.style.display = 'block';
    }

});

