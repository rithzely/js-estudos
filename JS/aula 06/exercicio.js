let jogos = [`valorant`, `god of war`, `resident evil`, `roblox`]
//               0            1               2            3          
console.log(jogos[1]);  
console.log(jogos[3]);
 

console.log(`---------------------------------------------------`);

let animais = [
    //     0    |      1     |     2      
    [`camundongo`, `elefante`, `papagaio`],    // 0
    [`girafa`, `macaco`, `coelho`],            // 1
    [`leopardo`, `jacaré`, `tubarão`],         // 2      
]

console.log(animais);

console.log(`---------------------------------------------------`);

let animal_removido1 = animais[0][1];
let animal_removido2 = animais[0][2];

console.log(`animal removido: ${animal_removido1}`);
console.log(`animal removido: ${animal_removido2}`);

console.log(`---------------------------------------------------`);

animais[0][0] = `raposa`
animais[1][1] = `polvo`
animais[2][2] = `minhoca`

console.log(`troca:`);
console.log(animais);


