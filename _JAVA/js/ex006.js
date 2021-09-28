var a = document.getElementById('area')
a.addEventListener('click', clicar)
a.addEventListener('mouseenter', entrar)
a.addEventListener('mouseout', sair)

function clicar() {
    a.innerText = 'Você clicou!'
    a.style.background = 'blue'
    a.style.color = 'white'
}

function entrar() {
    a.innerText = 'entrou!'
}

function sair() {
    a.innerText = 'saiu!'
    a.style.background = 'black'
}