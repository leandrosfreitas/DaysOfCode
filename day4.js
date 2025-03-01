let numeroAleatorio = Math.floor(Math.random() * 11);
let numeroEscolhido = null;
let tentativas = 3;

while (tentativas >= 1) {
    numeroEscolhido = Number(prompt('Qual o valor que você deseja chutar? '));
    if (numeroAleatorio === numeroEscolhido) {
        alert(`Parabéns, você acerto, o número aleatório era ${numeroAleatorio}`);
        break;
    } else {
        tentativas --;
        alert(`Você tem mais ${tentativas} tentativas.`);
    }
}

if (tentativas === 0 && numeroAleatorio !== numeroEscolhido) {
    alert(`O número aleatório era o ${numeroAleatorio}`)
}
