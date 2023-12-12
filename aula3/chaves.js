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

const chavesDoObjeto = Object.keys(cliente);

console.log(chavesDoObjeto)

if (!chavesDoObjeto.includes("enderecos")){
    console.error("Erro. É necessário ter um endereço cadastrdo.");
}

// node aula3/chaves.js