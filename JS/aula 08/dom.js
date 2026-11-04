let titulo = document.getElementById('titulo')
titulo.style.color = 'pink'
titulo.innerHTML = 'gripadinho'

let lista = document.getElementsByClassName('lista')
// lista[1].style.color = 'pink'

for (let num = 0; num < lista.length; num++)  {
    lista[num].style.color = 'red'
}

let paragrafo = document.getElementsByTagName('p')
paragrafo[1].style.color = 'purple'