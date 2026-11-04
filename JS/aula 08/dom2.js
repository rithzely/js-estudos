let primeiro_elemento = document.querySelector('#titulo')
primeiro_elemento.innerHTML = 'ola mundo'

// # ->  É pro nome de ID
// . ->  É por nome de classe

let segundo_elemento = document.querySelectorAll('p')
segundo_elemento[1].innerText = 'fofinho'