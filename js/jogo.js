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

const letras = 'QWERTYUIOPASDFGHJKLÇZXCVBNM ';
const teclado = document.getElementById('teclado');
for (let l of letras){
    if (l === ' ') {
        const espaço = document.createElement('button');
    espaço.setAttribute('id', 'espaço');
    espaço.textContent = 'ESPAÇO';
    teclado.appendChild(espaço);
    } else{ 
    let botao = document.createElement('button');
    botao.setAttribute('id', l);
    botao.textContent = l;
    teclado.appendChild(botao);}
}

