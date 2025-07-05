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
let verifyEnd = false;
function checarFimDeJogo() {
    if (!exibicao.includes('_')) {
        const somGanhou = new Audio('audios/correct-6033.mp3');
        somGanhou.play();
        verifyEnd = true;
        setTimeout(()=> {
        alert('Parabéns, você venceu!');
        let pontoAtualizado = parseInt(pontos.textContent) + 1;
        pontos.textContent = pontoAtualizado <= 9 ?`0${pontoAtualizado}`: pontoAtualizado;
        localStorage.setItem('pontoAtualizado', JSON.stringify(pontoAtualizado));
    }, 300)
    } else if (errado === 6) {
        const somPerdeu = new Audio('audios/wrong-buzzer-6268.mp3');
        somPerdeu.play();
        verifyEnd = true;
        setTimeout(()=> {
        alert(`Você perdeu! A palavra era: ${randomWord}`);
    }, 300)
    }
}
const somClick = new Audio('audios/mouse-click-290204.mp3');

function criarTeclado(letras, container) {
    for (let l of letras) {
        const botao = document.createElement('button');
        botao.setAttribute('id', l);
        botao.textContent = l;
        botao.addEventListener('click', () => {
            somClick.play();
            botao.disabled = true; 
            if (verifyEnd === false) {
            atualizarPalavra(l);
            }
        });
        container.appendChild(botao);
    }
}

criarTeclado(letras1, teclado1);
criarTeclado(letras2, teclado2);
criarTeclado(letras3, teclado3);
