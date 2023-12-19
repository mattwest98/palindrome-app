const button = document.querySelector('#check')
const inputText = document.querySelector('#input-text')
const resultado = document.querySelector('#resultado')

button.addEventListener('click', inputFunction)

function inputFunction(){
    const texto = inputText.value.trim()

    if (texto.length === 0){
        resultado.innerHTML = 'Ingrese una palabra o frase para poder comprobar!'
        return
    }

    const limpiarTexto = text.replace(/[^a-Za-z0-9]/g, '').toLowerCase()

    const esPalindromo = limpiarTexto === limpiarTexto.split('').reverse('').join('')

    const mensaje = esPalindromo ? `<span>Si! Es un palindromo</span>`  : `<span>No! No es un palindromo</span>` 

    resultado.innerHTML = mensaje
    resultado.classList.remove('error', 'exito')
    setTimeout(() => {
        resultado.classList.add(esPalindromo ? 'exito' : 'error')
    }, 10);
}


