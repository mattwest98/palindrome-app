const button = document.querySelector('#check')
const inputText = document.querySelector('#input-text')
const resultado = document.querySelector('#resultado')
const buttonRed = document.querySelector('.btn-red');
const buttonGreen = document.querySelector('.btn-green');
const buttonBlue = document.querySelector('.btn-blue');
const body = document.querySelector('body');



document.addEventListener('DOMContentLoaded', function() {
    inputText.focus(); 
  });
button.addEventListener('click', inputFunction)


function inputFunction(){
    const texto = inputText.value.trim()

    if (texto.length === 0){
        resultado.innerHTML = 'Ingrese una palabra o frase para poder comprobar!'
        return
    }

    const limpiarTexto = texto.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    if (limpiarTexto.length < 2 || !/[a-zA-Z0-9]/.test(limpiarTexto)) {
        resultado.classList.remove('error', 'exito');
        resultado.innerHTML = 'Ingrese una palabra o frase válida para poder comprobar!';
        return;
    }

    const esPalindromo = limpiarTexto === limpiarTexto.split('').reverse('').join('')

    const mensaje = esPalindromo ? `<span>Si! Es un palindromo</span>`  : `<span>No! No es un palindromo</span>` 

    resultado.innerHTML = mensaje
    resultado.classList.remove('error', 'exito')
    setTimeout(() => {
        resultado.classList.add(esPalindromo ? 'exito' : 'error')
    }, 10);
}

buttonRed.addEventListener('click', () => {
    body.style.background = 'linear-gradient(to right, #FF1F22, #E00004)'
    button.style.background = '#FF1F22'
})

buttonGreen.addEventListener('click', function() {
    body.style.background = 'linear-gradient(to right, #00cc00, #08D93C)';
    button.style.background = '#00cc00'
});

buttonBlue.addEventListener('click', function() {
    body.style.background = 'linear-gradient(to right, #0F00B8, #0E00A3)';
    button.style.background = '#0F00B8'

});


