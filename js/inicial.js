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
  'LIMA', 'LIMAO', 'MAÇA', 'MANGA', 'MARACUJA',
  'MELANCIA', 'MELAO', 'MORANGO', 'NECTARINA', 'PERA', 'PESSEGO',
  'PITANGA', 'ROMA', 'TAMARINDO', 'UVA', 'CACAU', 'GUARANA',
  'AÇAI', 'BABAÇU', 'AMORA', 'CAQUI', 'FIGO DA INDIA'
];

    localStorage.setItem('arrPrincipal', JSON.stringify(arrPrincipal));
    setTimeout(() => {window.location.href = 'jogo.html';}, 300);
})
const animais = document.querySelector('#animais');
animais.addEventListener('click', (event) => {
  event.preventDefault();
  somClick.play();
  arrPrincipal = ['ESCORPIAO', 'ORNINTORRINCO', 'RATASANA', 'AGUIA', 'URUBU', 'ABUTRE', 'BEM TE VI', 'PANDA', 'LOUVA DEUUS', 'ESPERANÇA',
  'CACHORRO', 'GATO', 'ELEFANTE', 'LEAO', 'TIGRE', 'MACACO',
  'GIRAFA', 'HIPOPOTAMO', 'RINOCERONTE', 'ZEBRA', 'CAMELO',
  'CAVALO', 'VACA', 'PORCO', 'OVELHA', 'COELHO', 'URSO',
  'LOBO', 'RAPOSA', 'TAMANDUA', 'JACARE', 'CROCODILO',
  'TARTARUGA', 'TUBARAO', 'BALEIA', 'GOLFINHO', 'POLVO',
  'AGUIA', 'CORUJA', 'FALCAO', 'PAPAGAIO', 'PINGUIM',
  'MORCEGO', 'ESQUILO', 'ONÇA', 'ARANHA', 'ESCORPIAO',
  'ARARA', 'AVESTRUZ', 'BESOURO', 'BICHO PREGUICA', 'BODE', 'BORBOLETA', 'BUFALO', 'CABRA', 'CACATUA',
  'CAGADO', 'CALANGO', 'CANGURU', 'CAPIVARA', 'CASTOR',
  'CAVALO MARINHO', 'CHIMPANZE', 'CHINCHILA', 'CIGARRA', 'CISNE',
  'CUPIM', 'DONINHA', 'EMA', 'ENGUIA', 'ESCARAVELHO',
  'FURAO', 'GALINHA', 'GALO', 'GAVIAO', 'GNU', 'GORILA',
  'GRILO', 'GUAXINIM', 'HAMSTER', 'HIENA', 'IGUANA',
  'JAGUAR', 'JAVALI', 'JEGUE', 'JOANINHA', 'JUMENTO',
  'LAGARTO', 'LAGOSTA', 'LARVA', 'LONTRA',
  'LULA', 'MARRECO', 'MINHOCA',
  'MULA', 'MURIQUI', 'ORNITORRINCO', 'OSTRA', 'OURIÇO', 'PACA', 'PANDA', 'PANTERA', 'PARDAL',
  'PATO', 'PERCEVEJO', 'PERU', 'PIOLHO', 'PIRANHA', 'PLANARIA', 'POMBO', 'PORQUINHO DA INDIA',
  'QUATI', 'RATO', 'SALAMANDRA', 'SARDINHA', 'SAPO',
  'SIRI', 'SUCURI', 'SURICATE', 'TATU', 'JAVALI',
  'TILAPIA', 'TOURO', 
  'VEADO', 'VESPA', 'VIBORA'
];
    localStorage.setItem('arrPrincipal', JSON.stringify(arrPrincipal));
    setTimeout(() => {window.location.href = 'jogo.html';}, 300);
})
const paises = document.querySelector('#paises');

paises.addEventListener('click', (event) => {
  event.preventDefault();
  somClick.play();
  arrPrincipal = [
  'AFEGANISTAO', 'AFRICA DO SUL', 'ALBANIA', 'ALEMANHA', 'ANDORRA',
  'ANGOLA', 'ARABIA SAUDITA', 'ARGELIA', 'ARGENTINA',
  'ARMENIA', 'AUSTRALIA', 'AUSTRIA', 'BAHAMAS', 'BANGLADESH',
  'BARBADOS', 'BELGICA', 'BELIZE', 'BOLIVIA', 'BOSNIA E HERZEGOVINA',
  'BOTSUANA', 'BRASIL', 'BRUNEI', 'BULGARIA', 'CABO VERDE', 'CAMAROES',
  'CANADA', 'CATAR', 'CHILE', 'CHINA', 'CHIPRE',
  'COLOMBIA', 'CONGO', 'COREIA DO NORTE', 'COREIA DO SUL',
  'COSTA DO MARFIM', 'COSTA RICA', 'CROACIA', 'CUBA', 'DINAMARCA', 
  'DOMINICA', 'EGITO', 'EMIRADOS ARABES UNIDOS', 'EQUADOR', 'ESLOVAQUIA',
  'ESLOVENIA', 'ESPANHA', 'ESTADOS UNIDOS', 'ESTONIA', 'ETIOPIA', 'FIJI',
  'FILIPINAS', 'FINLANDIA', 'FRANÇA', 'GANA', 'GEORGIA',
  'GRANADA', 'GRECIA', 'GUATEMALA', 'GUIANA', 'HAITI', 'HOLANDA', 
  'HONDURAS', 'HUNGRIA', 'INDIA', 'INDONESIA', 'IRA', 'IRAQUE',
  'IRLANDA', 'ISLANDIA', 'ISRAEL', 'ITALIA', 'JAMAICA', 'JAPAO',
  'JORDANIA', 'KUAITE', 'LAOS', 'LETONIA', 'LIBANO', 'LIBERIA', 'LIBIA',
  'LIECHTENSTEIN', 'LITUANIA', 'LUXEMBURGO', 'MADAGASCAR',
  'MALAUI', 'MALASIA', 'MALDIVAS', 'MALI', 'MALTA', 'MARROCOS',
  'MAURICIO', 'MEXICO', 'MIANMAR', 'MOÇAMBIQUE', 'MOLDAVIA', 'MONACO',
  'MONGOLIA', 'MONTENEGRO', 'NAMIBIA', 'NEPAL', 'NICARAGUA', 'NIGER',
  'NIGERIA', 'NORUEGA', 'NOVA ZELANDIA', 'OMA', 'PAISES BAIXOS', 'PAQUISTAO',
  'PANAMA', 'PAPUA-NOVA GUINE', 'PARAGUAI', 'PERU', 'POLONIA',
  'PORTUGAL', 'QUENIA', 'REINO UNIDO', 'REPUBLICA DOMINICANA', 'REPUBLICA TCHECA', 
  'ROMENIA', 'RUANDA', 'RUSSIA', 'SAMOA', 'SANTA LUCIA', 'SAO MARINO',
  'SAO TOME E PRINCIPE', 'SENEGAL', 'SERRA LEOA', 'SERVIA',
  'SEYCHELLES', 'SINGAPURA', 'SIRIA', 'SOMALIA', 'SRI LANKA',
  'SUDAO', 'SUDAO DO SUL', 'SUIÇA', 'SUEDIA', 'SURINAME', 'TAILANDIA',
  'TANZANIA', 'TIMOR LESTE', 'TOGO', 'TONGA', 'TRINDADE E TOBAGO',
  'TUNISIA', 'TURQUIA', 'TUVALU', 'UCRANIA', 'UGANDA', 'URUGUAI',
  'UZBEQUISTAO', 'VANUATU', 'VATICANO', 'VENEZUELA', 'VIETNA',
  'ZAMBIA', 'ZIMBABUE'
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