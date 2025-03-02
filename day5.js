let lista = [];  // Inicia a lista vazia

alert("Lista de Compras");
let pergunta = "sim";

while (pergunta.toLowerCase() === "sim") {
    let addItem = prompt("Qual comida você deseja inserir? ");
    let addCategoria = prompt("Em qual categoria essa comida se encaixa? ");

    // Verifica se a categoria já existe na lista
    let existe = false;

    for (let i = 0; i < lista.length; i++) {
        if (lista[i].categoria === addCategoria) {
            lista[i].itens.push(addItem);
            existe = true;
            break;
        }
    }

    // Se a categoria não existir, cria uma nova
    if (!existe) {
        lista.push({ categoria: addCategoria, itens: [addItem] });
    }

    do {
        pergunta = prompt("Deseja adicionar outra comida na sua lista? (sim/não)").toLowerCase();
        if (pergunta !== "sim" && pergunta !== "não") {
            alert("Opção inválida! Digite 'sim' ou 'não'.");
        }
    } while (pergunta !== "sim" && pergunta !== "não");
}

console.log(lista);
