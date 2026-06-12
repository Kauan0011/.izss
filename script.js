// DATA DE INÍCIO DO NAMORO
const dataNamoro = new Date("2024-07-04 22:30:23");

function atualizarContador() {

    const agora = new Date();

    let diferenca = agora - dataNamoro;

    let segundos = Math.floor(diferenca / 1000);
    let minutos = Math.floor(segundos / 60);
    let horas = Math.floor(minutos / 60);
    let dias = Math.floor(horas / 24);

    let anos = Math.floor(dias / 365);
    dias %= 365;

    let meses = Math.floor(dias / 30);
    dias %= 30;

    horas %= 24;
    minutos %= 60;
    segundos %= 60;

    document.getElementById("tempo").innerHTML =
        `${anos} ano, ${meses} meses, ${dias} dias<br>
        ${horas} horas, ${minutos} minutos e ${segundos} segundos ❤️`;
}

setInterval(atualizarContador, 1000);
atualizarContador();

function irParaFotos(){
    window.location.href = "fotos.html";
}

// CORAÇÕES CAINDO
function criarCoracao(){

    const simbolos = [
        "❤️","💖","💕","💘","💗","💞"
    ];

    const coracao = document.createElement("div");

    coracao.classList.add("coracao");

    coracao.innerHTML =
        simbolos[Math.floor(Math.random() * simbolos.length)];

    coracao.style.left =
        Math.random() * window.innerWidth + "px";

    coracao.style.fontSize =
        (Math.random() * 25 + 15) + "px";

    coracao.style.animationDuration =
        (Math.random() * 4 + 4) + "s";

    document.body.appendChild(coracao);

    setTimeout(() => {
        coracao.remove();
    }, 8000);
}

setInterval(criarCoracao, 200);
const texto =
"Você é a melhor parte dos meus dias ❤️";

let i = 0;

function escrever(){

    if(i < texto.length){

        document.getElementById("digitando").innerHTML += texto.charAt(i);

        i++;

        setTimeout(escrever, 80);
    }
}

escrever();