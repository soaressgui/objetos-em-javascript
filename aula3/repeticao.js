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

for (let chave in cliente){
    let tipo = typeof cliente[chave];
  if (tipo !== "object" && tipo !== "function") {
    console.log(`a chave ${chave} tem o valor ${cliente[chave]}`);
    }
}

// node aula3/repeticao.js