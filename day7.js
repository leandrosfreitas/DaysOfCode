function soma(a, b) {
    return a + b;
}

function subtracao(a, b) {
    return a - b;
}

function multiplicacao(a, b) {
    return a * b;
}

function divisao(a, b) {
    if (b === 0) {
        return "error! divisao por zero não permitida"
    } else {
        return a / b
    }
}

operador = prompt('Escolha as seguintes opções:\n(+)soma\n(-)subtracao)\n(*)multiplicacao\n(/)divisao')

function calculator(opcao) {
    num1 = Number(prompt('Digite o primeiro valor! '))
    num2 = Number(prompt('Digite o segundo valor! '))
    switch (opcao) {
        case "+":
            return soma(num1, num2);
        case "-":
            return subtracao(num1, num2);
        case "*":
            return multiplicacao(num1, num2);
        case "/":
            return divisao(num1, num2);
        default:
            console.log('Opção inválida.');
    }
}

console.log(calculator(operador));
