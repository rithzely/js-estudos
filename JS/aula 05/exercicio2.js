let soma = 0;

let numero;

do {
    numero = Number (prompt( `de um numero: `));
    soma = soma + numero;
} while (numero !=0); 

alert (`resultado: ${soma}!`)
