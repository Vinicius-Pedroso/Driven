let check1 = true;
let check2 = true;
let check3 = true;

function ligar1(elemento) {
    check1 = elemento.classList.contains("selecionado1"); 
    const selecionado1 = document.querySelector(".selecionado1");
    if (selecionado1 !== null) {
        selecionado1.classList.remove("selecionado1");
    }

    if (check1 !== true) {
        elemento.classList.add("selecionado1");
    }

    if (check2 !== true && check3 !== true) {
        const botao1 = document.querySelector(".botao1");
        const botao2 = document.querySelector(".botao2");
        botao1.classList.toggle("desligaBotao");
        botao2.classList.toggle("ligaBotao");
    }

    return check1;
}

function ligar2(elemento) {
    check2 = elemento.classList.contains("selecionado2"); 
    const selecionado2 = document.querySelector(".selecionado2");
    if (selecionado2 !== null) {
        selecionado2.classList.remove("selecionado2");
    }

    if (check2 !== true) {
        elemento.classList.add("selecionado2");
    }

    if (check1 !== true && check3 !== true) {
        const botao1 = document.querySelector(".botao1");
        const botao2 = document.querySelector(".botao2");
        botao1.classList.toggle("desligaBotao");
        botao2.classList.toggle("ligaBotao");
    }

    return check2;
}

function ligar3(elemento) {
    check3 = elemento.classList.contains("selecionado3"); 
    const selecionado3 = document.querySelector(".selecionado3");
    if (selecionado3 !== null) {
        selecionado3.classList.remove("selecionado3");
    }

    if (check3 !== true) {
        elemento.classList.add("selecionado3");
    }

    if (check1 !== true && check2 !== true) {
        const botao1 = document.querySelector(".botao1");
        const botao2 = document.querySelector(".botao2");
        botao1.classList.toggle("desligaBotao");
        botao2.classList.toggle("ligaBotao");
    }

    return check3;
}
