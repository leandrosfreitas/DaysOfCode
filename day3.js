console.log('Iniciando o programa...');

const pergunta1 = prompt('Qual área você quer seguir?\n1. Front-End\n2. Back-End\n\n');

let pergunta2 = '';

if (pergunta1 === '1') {
    pergunta2 = prompt('Escolha a tecnologia:\n1. React\n2. Vue\n\n');
} else if (pergunta1 === '2') {
    pergunta2 = prompt('Escolha a tecnologia:\n1. C#\n2. Java\n\n');
} else {
    alert('Opção inválida.');
}

const pergunta3 = prompt('O que você deseja no futuro?\n1. Seguir se especializando na área escolhida\n2. Seguir se desenvolvendo para se tornar Fullstack\n\n');

alert(`Você escolheu seguir na área de ${pergunta1 === '1' ? 'Front-End' : 'Back-End'}, aprender ${pergunta1 === '1' ? (pergunta2 === '1' ? 'React' : 'Vue') : (pergunta2 === '1' ? 'C#' : 'Java')} e no futuro, deseja ${pergunta3 === '1' ? 'Se especializar' : 'Se tornar Fullstack'}.`);

let tecnologias = [];
let querContinuar = 'sim';

while (querContinuar.toLowerCase() === 'sim') {
    let novaTecnologia = prompt('Quais são as tecnologias que gostaria de se especialiar?');
    tecnologias.push(novaTecnologia);

    querContinuar = prompt('Mais alguma tecnologia que gostaria de aprender? Digite "sim" para continuar e "não" para encerrar!')
}

let mensagem = '';

mensagem += `<br>Ótimo, Você tem ionteresse em aprender: ${tecnologias.join(', ')}`

document.getElementById("resultado").innerHTML = mensagem;