if(localStorage.getItem('pontoAtualizado') !== null) {
    const pontoAtualizadoStr = localStorage.getItem('pontoAtualizado');
    const pontoAtualizado = JSON.parse(pontoAtualizadoStr);
    const pontos = document.getElementById('pontos');
    pontos.innerText = pontoAtualizado <= 9 ?`0${pontoAtualizado}`: pontoAtualizado;

}

let arrPrincipal = []

const frutas = document.getElementById('frutas');

frutas.addEventListener('click', () => {
    event.preventDefault();
    arrPrincipal = ['MAÇA', 'BANANA', 'MORANGO', 'LIMAO', 'KIWI', 'MORANGO'];
    localStorage.setItem('arrPrincipal', JSON.stringify(arrPrincipal));
    window.location.href = 'jogo.html';
})
const animais = document.querySelector('#animais');
animais.addEventListener('click', () => {
    event.preventDefault();
    arrPrincipal = ['ELEFANTE', 'LEAO', 'CACHORRO', 'MORCEGO', 'MACACO', 'GATO'];
    localStorage.setItem('arrPrincipal', JSON.stringify(arrPrincipal));
    window.location.href = 'jogo.html';
})
const paises = document.querySelector('#paises');

paises.addEventListener('click', () => {
    event.preventDefault();
    arrPrincipal = ['BRASIL', 'ALEMANHA', 'ESTADOS UNIDOS', 'FRANÇA', 'EQUADOR', 'CHINA'];
    localStorage.setItem('arrPrincipal', JSON.stringify(arrPrincipal));
    window.location.href = 'jogo.html';
})