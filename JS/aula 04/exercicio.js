let avaliar_atendimento = Number(prompt(`informe um número para saber qual é o misterioso dia da semana: 0 - 7`))

switch (avaliar_atendimento) {
    case 1:
        console.log(`segunda`);
        break;
    case 2:
        console.log(`terça`);
        break;
    case 3:
        console.log(`quarta`);
        break;
    case 4:
        console.log(`quinta`);
        break;
    case 5:
        console.log(`sexta`);
        break;
    case 6:
        console.log(`sábado`);
        break; 
    case 7:
        console.log(`domingo`);
        break; 

    default:
        console.log(`sem valor informado.`);
        
}