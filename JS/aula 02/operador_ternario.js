//operador unario | 1 elemento
//operador binario | 2 elemento
//operador ternario | 3 elemento

let nome = "ritinha" // string
let idade = 22 // number
let matriculado = true // bolean
let nota = 9.5 

// typeof - teste o tipo de dado que tenho na variavel

console.log(nome);
console.log(`tipo de dado: ${typeof nome}`);
console.log(`===============================`);

console.log(idade);
console.log(`tipo de dado: ${typeof idade}`);
console.log(`===============================`);

console.log(matriculado);
console.log(`tipo de dado: ${typeof matriculado}`);
console.log(`===============================`);



// operador binario | 2 elementos


let curso = idade >= 15  && nota >= 6
console.log(`aluno aprovado para o curso: ${curso}`);

// operador ternario | 3 elementos 
let valor = 2500
// valor minimo - 2000
// tste ? verdadeiro | falso
let resposta = valor >= 2000 ? "vou a praia" : "vou ficar em casa"

console.log(resposta);
