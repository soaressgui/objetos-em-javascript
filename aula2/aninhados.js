const cliente = {
    nome: "Joao",
    idade: 25,
    email: "joao@forma.com.br",
    telefone: ["11990900990","1125255225"],
};

cliente.endereco = {
    rua: "R. Joseph Climber",
    numero: 1337,
    apartamento: true,
    complemento: "ap 934",
};

console.log(cliente.endereco);
// console.log(cliente["endereço"]);

// node aula2/aninhados.js