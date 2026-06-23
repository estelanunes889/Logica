let aluno = {
    nome: "Estela",
    idade: 20,
    endereço: {
    // propriedade que é o objetivo
    logradouro: "Rua enaldo dos santos",
    numero: 539,
    complemento: "casa 1",
    bairro: "Engenheiro leal",
    cidade: "Rio de Janeiro",
    uf: "RJ",
    cep: "21370-200"
    },
};

console.log(aluno.endereço.bairro);