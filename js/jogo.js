const arrPrincipalStr = localStorage.getItem('arrPrincipal');
const arrPrincipal = JSON.parse(arrPrincipalStr);
const len = arrPrincipal.length;
const aleatorio = Math.floor(Math.random() * len);
const randomWord = arrPrincipal[aleatorio];

/*const arr = ['sapo', 'macaco', 'elefante'];
const len = arr.length;
const aleatorio = Math.floor(Math.random() * len);
const arrayAleatorio = arr[aleatorio];

let certo = 0, errado = 0;

for (let i=0;  (certo === len) || (errado === 6); i++){
    let letra = 'a';
    if (arrayAleatorio.includes(letra)) {
        certo += 1;
        break;
    } else {
        errado += 1
    }
}
*/

const letras1 = 'QWERTYUIOP';
const letras2 = 'ASDFGHJKLÇ';
const letras3 = 'ZZXCVBNM';
const teclado1 = document.getElementById('fila1');
const teclado2 = document.getElementById('fila2');
const teclado3 = document.getElementById('fila3');
for (let l of letras1){
    let botao = document.createElement('button');
    botao.setAttribute('id', l);
    botao.textContent = l;
    teclado1.appendChild(botao);
}
for (let l of letras2){
    let botao = document.createElement('button');
    botao.setAttribute('id', l);
    botao.textContent = l;
    teclado2.appendChild(botao);
}for (let l of letras3){
    let botao = document.createElement('button');
    botao.setAttribute('id', l);
    botao.textContent = l;
    teclado3.appendChild(botao);
}

