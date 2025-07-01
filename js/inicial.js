const arr = ['sapo', 'macaco', 'elefante'];
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


