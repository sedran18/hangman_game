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
  'PITANGA', 'ROMA', 'TAMARINDO', 'UVA', 'ARACA', 'BIRIBA',
  'CABELUDINHA', 'CUPUAÇU', 'GRUMIXAMA', 'JENIPAPO', 'KAKI',
  'LICHIA', 'LONGAN', 'MACAUBA', 'MACARANDUBA', 'MIRTILO',
  'MURICI', 'NONI', 'PITOMBA', 'RAMBUTAN', 'SAPOTI', 'SERIGUELA',
  'TANGERINA', 'UMBU', 'BACABA', 'CAMU CAMU', 'CACAU', 'BURITI',
  'PEQUI', 'PUCUNHA', 'GUARANA', 'INGA', 'JATOBA', 'TUCUMA',
  'MANGOSTAO', 'AÇAI', 'ARATICUM', 'BARU', 'MORICHE', 'PUPUNHA',
  'SAPOTA', 'SORVA', 'BABAÇU', 'MARAJA', 'TURIVA', 'AMORA'
];;
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
  'LAGARTO', 'LAGOSTA', 'LAMBARI', 'LARVA', 'LONTRA',
  'LULA', 'MANDRIL', 'MARRECO', 'MICO', 'MINHOCA',
  'MULA', 'MURIQUI', 'NARVAL', 'ORNITORRINCO', 'OSTRA',
  'OTARIA', 'OURICO', 'PACA', 'PANDA', 'PANTERA', 'PARDAL',
  'PATO', 'PERCEVEJO', 'PERU', 'PIOLHO', 'PIRANHA',
  'PIRARUCU', 'PLANARIA', 'POMBO', 'PORQUINHO DA INDIA',
  'QUATI', 'RATO', 'SALAMANDRA', 'SARDINHA', 'SAPO',
  'SIRI', 'SUCURI', 'SURICATE', 'TATU', 'TEXUGO',
  'TILAPIA', 'TOURO', 'TRITAO', 'URUTAU', 'URUBU',
  'VEADO', 'VESPA', 'VIBORA', 'VICUNHA', 'MAÇARICO'
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
  'ANGOLA', 'ANTIGUA E BARBUDA', 'ARABIA SAUDITA', 'ARGELIA', 'ARGENTINA',
  'ARMENIA', 'AUSTRALIA', 'AUSTRIA', 'AZERBAIJAO', 'BAHAMAS', 'BANGLADESH',
  'BARBADOS', 'BARENE', 'BELGICA', 'BELIZE', 'BENIM', 'BIELORRUSSIA',
  'BOLIVIA', 'BOSNIA E HERZEGOVINA', 'BOTSUANA', 'BRASIL', 'BRUNEI',
  'BULGARIA', 'BURKINA FASO', 'BURUNDI', 'BUTAO', 'CABO VERDE', 'CAMAROES',
  'CAMBOJA', 'CANADA', 'CATAR', 'CAZAQUISTAO', 'CHILE', 'CHINA', 'CHIPRE',
  'COLOMBIA', 'COMORES', 'CONGO', 'COREIA DO NORTE', 'COREIA DO SUL',
  'COSTA DO MARFIM', 'COSTA RICA', 'CROACIA', 'CUBA', 'DINAMARCA', 'DOMINICA',
  'EGITO', 'EMIRADOS ARABES UNIDOS', 'EQUADOR', 'ERITREIA', 'ESLOVAQUIA',
  'ESLOVENIA', 'ESPANHA', 'ESTADOS UNIDOS', 'ESTONIA', 'ETIOPIA', 'FIJI',
  'FILIPINAS', 'FINLANDIA', 'FRANÇA', 'GABAO', 'GAMBIA', 'GANA', 'GEORGIA',
  'GRANADA', 'GRECIA', 'GUATEMALA', 'GUIANA', 'GUIANA FRANCESA', 'GUINE',
  'GUINE EQUATORIAL', 'GUINE-BISSAU', 'HAITI', 'HOLANDA', 'HONDURAS',
  'HUNGRIA', 'IEMEN', 'ILHAS MARSHALL', 'INDIA', 'INDONESIA', 'IRA',
  'IRAQUE', 'IRLANDA', 'ISLANDIA', 'ISRAEL', 'ITALIA', 'JAMAICA', 'JAPAO',
  'JORDANIA', 'KUAITE', 'LAOS', 'LETONIA', 'LIBANO', 'LIBERIA', 'LIBIA',
  'LIECHTENSTEIN', 'LITUANIA', 'LUXEMBURGO', 'MACEDONIA DO NORTE', 'MADAGASCAR',
  'MALAUI', 'MALASIA', 'MALDIVAS', 'MALI', 'MALTA', 'MARROCOS', 'MAURICIO',
  'MAURITANIA', 'MEXICO', 'MIANMAR', 'MOCAMBIQUE', 'MOLDAVIA', 'MONACO',
  'MONGOLIA', 'MONTENEGRO', 'NAMIBIA', 'NAURU', 'NEPAL', 'NICARAGUA', 'NIGER',
  'NIGERIA', 'NORUEGA', 'NOVA ZELANDIA', 'OMA', 'PAISES BAIXOS', 'PAQUISTAO',
  'PALAU', 'PANAMA', 'PAPUA-NOVA GUINE', 'PARAGUAI', 'PERU', 'POLONIA',
  'PORTUGAL', 'QUENIA', 'QUIRGUIZIA', 'REINO UNIDO', 'REPUBLICA CENTRO-AFRICANA',
  'REPUBLICA DOMINICANA', 'REPUBLICA TCHECA', 'ROMENIA', 'RUANDA', 'RUSSIA',
  'SALOMAO', 'SALVADOR', 'SAMOA', 'SANTA LUCIA', 'SAO CRISTOVAO E NEVES',
  'SAO MARINO', 'SAO TOME E PRINCIPE', 'SENEGAL', 'SERRA LEOA', 'SERVIA',
  'SEYCHELLES', 'SINGAPURA', 'SIRIA', 'SOMALIA', 'SRI LANKA', 'SUDAO',
  'SUDAO DO SUL', 'SUICA', 'SUEDIA', 'SURINAME', 'TAILANDIA', 'TAIUA',
  'TANZANIA', 'TIMOR LESTE', 'TOGO', 'TONGA', 'TRINDADE E TOBAGO',
  'TUNISIA', 'TURCOMENISTAO', 'TURQUIA', 'TUVALU', 'UCRANIA', 'UGANDA',
  'URUGUAI', 'UZBEQUISTAO', 'VANUATU', 'VATICANO', 'VENEZUELA', 'VIETNA',
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