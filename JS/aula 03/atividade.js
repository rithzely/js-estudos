//ver qual é a idade do ser 
console.log(`Qual sua idade? `);

let idade = 28

if (idade < 18) {
    console.log(`você é kid`);
} else if (idade >= 18 && idade <60) {
    console.log(`você infelizmente é adulto`);
} else  {
    console.log(`você é idoso kk`);
}

    console.log(`----------------------------------------------------------------`);

//ver se pode dirigir
console.log(`Para verificar se você pode dirigir, qual sua idade? `);

let idade2 = 7

if (idade2 >= 18) {
    console.log(`você pode dirigir!!!`);
} else {
    console.log(`você não pode né kk`);
}

    console.log(`----------------------------------------------------------------`);

console.log(`Digite um número: `);
let numero = 28

if (numero < 0) {
    console.log(`o número ${numero} é negativo`);
} else if (numero >0) {
    console.log(`o número ${numero} é positivo`);
} else {
    console.log(`o número ${numero} é zero`);
}

    console.log(`----------------------------------------------------------------`);

console.log(`Digite seu peso: `);
let peso = 45
console.log(`Digite sua altura: `);
let altura = 1.60
let imc = peso / ( altura * altura)

if ( imc >= 18.5 && imc <= 24.9 ) {
    console.log(`ta saudavel paizao`);
} else {
    console.log(`alguem tem que ver isso ai`);
}


