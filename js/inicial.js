if(localStorage.getItem('pontoAtualizado') !== null) {
    const pontoAtualizadoStr = localStorage.getItem('pontoAtualizado');
    const pontoAtualizado = JSON.parse(pontoAtualizadoStr);
    const pontos = document.getElementById('pontos');
    pontos.innerText = pontoAtualizado <= 9 ?`0${pontoAtualizado}`: pontoAtualizado;

}
const somClick = new Audio('audios/mouse-click-290204.mp3');

let arrPrincipal = []

const frutas = document.getElementById('frutas');

frutas.addEventListener('click', (event) => {
  event.preventDefault();
  somClick.play();
  arrPrincipal = [
  'ABACATE', 'ABACAXI', 'ACEROLA', 'AMEIXA', 'BANANA', 'CAJU',
  'CARAMBOLA', 'CEREJA', 'COCO', 'DAMASCO', 'FIGO', 'FRAMBOESA',
  'GOIABA', 'GRAVIOLA', 'JABUTICABA', 'JACA', 'KIWI', 'LARANJA',
  'LIMA', 'LIMAO', 'MAÇA', 'MANGA', 'MANGABA', 'MARACUJA', 
  'MELANCIA', 'MELAO', 'MORANGO', 'NECTARINA', 'PERA', 'PESSEGO',
  'PITANGA', 'ROMA', 'TAMARINDO', 'UVA'
];
    localStorage.setItem('arrPrincipal', JSON.stringify(arrPrincipal));
    setTimeout(() => {window.location.href = 'jogo.html';}, 300);
})
const animais = document.querySelector('#animais');
animais.addEventListener('click', (event) => {
  event.preventDefault();
  somClick.play();
  arrPrincipal = ['CACHORRO', 'GATO', 'ELEFANTE', 'LEAO', 'TIGRE', 'MACACO',
  'GIRAFA', 'HIPOPOTAMO', 'RINOCERONTE', 'ZEBRA', 'CAMELO',
  'CAVALO', 'VACA', 'PORCO', 'OVELHA', 'COELHO', 'URSO',
  'LOBO', 'RAPOSA', 'TAMANDUA', 'JACARE', 'CROCODILO',
  'TARTARUGA', 'TUBARAO', 'BALEIA', 'GOLFINHO', 'POLVO',
  'AGUIA', 'CORUJA', 'FALCAO', 'PAPAGAIO', 'PINGUIM',
  'MORCEGO', 'ESQUILO', 'ONCA', 'ARANHA', 'ESCORPIAO'
];
    localStorage.setItem('arrPrincipal', JSON.stringify(arrPrincipal));
    setTimeout(() => {window.location.href = 'jogo.html';}, 300);
})
const paises = document.querySelector('#paises');

paises.addEventListener('click', (event) => {
  event.preventDefault();
  somClick.play();
  arrPrincipal = [
  'BRASIL', 'ARGENTINA', 'BOLIVIA', 'CHILE', 'COLOMBIA', 'EQUADOR',
  'PARAGUAI', 'PERU', 'URUGUAI', 'VENEZUELA', 'ESTADOS UNIDOS',
  'CANADA', 'MEXICO', 'ALEMANHA', 'FRANÇA', 'ESPANHA', 'PORTUGAL',
  'ITALIA', 'HOLANDA', 'INGLATERRA', 'IRLANDA', 'POLONIA', 'RUSSIA',
  'CHINA', 'JAPAO', 'COREIA DO SUL', 'AUSTRALIA', 'NOVA ZELANDIA',
  'AFRICA DO SUL', 'ANGOLA', 'EGITO', 'MARROCOS', 'NIGERIA'
];
    localStorage.setItem('arrPrincipal', JSON.stringify(arrPrincipal));
    setTimeout(() => {window.location.href = 'jogo.html';}, 300);
})
const personalizado = document.getElementById('personalizado');
personalizado.addEventListener('click', (event) => {
  event.preventDefault();
  somClick.play()
  setTimeout(() => {window.location.href = 'personalizado.html';}, 300);
})