if(localStorage.getItem('pontoAtualizado') !== null) {
    const pontoAtualizadoStr = localStorage.getItem('pontoAtualizado');
    const pontoAtualizado = JSON.parse(pontoAtualizadoStr);
    const pontos = document.getElementById('pontos');
    pontos.innerText = pontoAtualizado <= 9 ?`0${pontoAtualizado}`: pontoAtualizado;
} else {
    const pontos = document.getElementById('pontos');
}
const arrPrincipalStr = localStorage.getItem('arrPrincipal');
const arrPrincipal = JSON.parse(arrPrincipalStr);

const len = arrPrincipal.length;
const aleatorio = Math.floor(Math.random() * len);
const randomWord = arrPrincipal[aleatorio];

const forca = document.getElementById('forca');
const palavra = document.getElementById('palavra');

let exibicao = '';
for (let letra of randomWord) {
    exibicao += (letra === ' ') ? ' ' : '_';
}

palavra.textContent = exibicao;
palavra.style.wordSpacing = '5px';

const letras1 = 'QWERTYUIOP';
const letras2 = 'ASDFGHJKLÇ';
const letras3 = 'ZXCVBNM';

const teclado1 = document.getElementById('fila1');
const teclado2 = document.getElementById('fila2');
const teclado3 = document.getElementById('fila3');

let certo = 0;
let errado = 0;

function atualizarPalavra(letra) {
    let novaExibicao = '';
    let certoRound = false;

    for (let i = 0; i < randomWord.length; i++) {
        if (randomWord[i] === letra) {
            novaExibicao += letra;
            certoRound = true;
            certo++;
        } else {
            novaExibicao += exibicao[i];
        }
    }

    exibicao = novaExibicao;
    palavra.textContent = exibicao;
    if (!certoRound && (errado <= 6)) {
        errado++;
        forca.setAttribute('src', `imagens/hang${errado}.png`);
    }
    checarFimDeJogo();

    

}

function checarFimDeJogo() {
    if (!exibicao.includes('_')) {
        alert('Parabéns, você venceu!');
        
        let pontoAtualizado = parseInt(pontos.textContent) + 1;
        pontos.textContent = pontoAtualizado <= 9 ?`0${pontoAtualizado}`: pontoAtualizado;
        localStorage.setItem('pontoAtualizado', JSON.stringify(pontoAtualizado));
        setTimeout(() => {
            window.location = href='index.html'
}, 5000);
    } else if (errado === 6) {
        alert(`Você perdeu! A palavra era: ${randomWord}`);
        location.href='index.html'
    }
}

function criarTeclado(letras, container) {
    for (let l of letras) {
        const botao = document.createElement('button');
        botao.setAttribute('id', l);
        botao.textContent = l;
        botao.addEventListener('click', () => {
            botao.disabled = true; 
            atualizarPalavra(l);
        });
        container.appendChild(botao);
    }
}

criarTeclado(letras1, teclado1);
criarTeclado(letras2, teclado2);
criarTeclado(letras3, teclado3);
