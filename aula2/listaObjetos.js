const cliente = {
    nome: "Joao",
    idade: 25,
    email: "joao@forma.com.br",
    telefone: ["11990900990","1125255225"],
};

cliente.enderecos = [
    {
    rua: "R. Joseph Climber",
    numero: 1337,
    apartamento: true,
    complemento: "ap 934",
    }
];

cliente.enderecos.push({
    rua: "Joseph Ladder",
    numero: 404,
    apartamento: false,
});

const listaApenasApartamentos = cliente.enderecos.filter(
    (endereco) => endereco.apartamento === true
);

console.log(listaApenasApartamentos);

// node aula2/listaObjetos.js