// avaliação de atendimento 

//ótimo - 1
// bom - 2
// regular - 3
// ruim - 4
// péssimo - 5

let avaliar_atendimento = Number(prompt(`avalie nosso atendimento: 0 - 5`))

switch (avaliar_atendimento) {
    case 1:
        console.log(`o atendimento foi avaliado como: ótimo`);
        break;
    case 2:
        console.log(`o atendimento foi avaliado como: bom`);
        break;
    case 3:
        console.log(`o atendimento foi avaliado como: regular`);
        break;
    case 4:
        console.log(`o atendimento foi avaliado como: ruim`);
        break;
    case 5:
        console.log(`o atendimento foi avaliado como: péssimo`);
        break;

    default:
        console.log(`o atendimento não foi avaliado.`);
        
}