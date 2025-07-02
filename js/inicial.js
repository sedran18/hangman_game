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
    arrPrincipal = [
  'ABACATE', 'ABACAXI', 'ACEROLA', 'AMEIXA', 'BANANA', 'CAJU',
  'CARAMBOLA', 'CEREJA', 'COCO', 'DAMASCO', 'FIGO', 'FRAMBOESA',
  'GOIABA', 'GRAVIOLA', 'JABUTICABA', 'JACA', 'KIWI', 'LARANJA',
  'LIMA', 'LIMAO', 'MACA', 'MANGA', 'MANGABA', 'MARACUJA', 
  'MELANCIA', 'MELAO', 'MORANGO', 'NECTARINA', 'PERA', 'PESSEGO',
  'PITANGA', 'ROMA', 'TAMARINDO', 'UVA'
];
    localStorage.setItem('arrPrincipal', JSON.stringify(arrPrincipal));
    window.location.href = 'jogo.html';
})
const animais = document.querySelector('#animais');
animais.addEventListener('click', () => {
    event.preventDefault();
    arrPrincipal = ['CACHORRO', 'GATO', 'ELEFANTE', 'LEAO', 'TIGRE', 'MACACO',
  'GIRAFA', 'HIPOPOTAMO', 'RINOCERONTE', 'ZEBRA', 'CAMELO',
  'CAVALO', 'VACA', 'PORCO', 'OVELHA', 'COELHO', 'URSO',
  'LOBO', 'RAPOSA', 'TAMANDUA', 'JACARE', 'CROCODILO',
  'TARTARUGA', 'TUBARAO', 'BALEIA', 'GOLFINHO', 'POLVO',
  'AGUIA', 'CORUJA', 'FALCAO', 'PAPAGAIO', 'PINGUIM',
  'MORCEGO', 'ESQUILO', 'ONCA', 'ARANHA', 'ESCORPIAO'
];
    localStorage.setItem('arrPrincipal', JSON.stringify(arrPrincipal));
    window.location.href = 'jogo.html';
})
const paises = document.querySelector('#paises');

paises.addEventListener('click', () => {
    event.preventDefault();
    arrPrincipal = [
  'BRASIL', 'ARGENTINA', 'BOLIVIA', 'CHILE', 'COLOMBIA', 'EQUADOR',
  'PARAGUAI', 'PERU', 'URUGUAI', 'VENEZUELA', 'ESTADOS UNIDOS',
  'CANADA', 'MEXICO', 'ALEMANHA', 'FRANCA', 'ESPANHA', 'PORTUGAL',
  'ITALIA', 'HOLANDA', 'INGLATERRA', 'IRLANDA', 'POLONIA', 'RUSSIA',
  'CHINA', 'JAPAO', 'COREIA DO SUL', 'AUSTRALIA', 'NOVA ZELANDIA',
  'AFRICA DO SUL', 'ANGOLA', 'EGITO', 'MARROCOS', 'NIGERIA'
];
    localStorage.setItem('arrPrincipal', JSON.stringify(arrPrincipal));
    window.location.href = 'jogo.html';
})