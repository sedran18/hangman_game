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
let arrPrincipal = []

const frutas = document.getElementById('frutas');

frutas.addEventListener('click', () => {
    arrPrincipal = ['maçã', 'banana', 'morango', 'limão', 'kiwi', 'morango'];
    localStorage.setItem('arrPrincipal', JSON.stringify(arrPrincipal));
})
const animais = document.querySelector('#animais');
animais.addEventListener('click', () => {
    arrPrincipal = ['elefante', 'leão', 'cachorro', 'morcego', 'macaco', 'gato'];
    localStorage.setItem('arrPrincipal', JSON.stringify(arrPrincipal));
})
const paises = document.querySelector('#paises');

paises.addEventListener('click', () => {
    arrPrincipal = ['brasil', 'alemanha', 'estados unidos', 'frança', 'equador', 'china'];
    localStorage.setItem('arrPrincipal', JSON.stringify(arrPrincipal));
})