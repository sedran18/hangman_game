const somClick = new Audio('audios/mouse-click-290204.mp3');
const botao = document.getElementById('playPersonalizado');
const input = document.getElementById('input');

botao.addEventListener('click', () => {
    const texto = input.value.trim().toUpperCase();
    const regex = /^[A-Z\s]+$/;

    if (!regex.test(texto) || texto.length > 25) {
        alert('ESCREVA SOMENTE CARACTERES ALFABÉTICOS SEM QUALQUER TIPO DE ACENTO(LIMITE 25 CARACTERES)');
        input.value = '';
    } else {
        somClick.play();
        setTimeout(()=> {
        const arrPrincipal = [texto];
        localStorage.setItem('arrPrincipal', JSON.stringify(arrPrincipal));
        window.location.href = 'jogo.html';}, 300);
    }
});
