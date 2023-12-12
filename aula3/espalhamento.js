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

function ligaParaCliente(telefoneComercial, telefoneResidencial){
    console.log(`Ligando para ${telefoneComercial}`);
    console.log(`Ligando para ${telefoneResidencial}`);
};

// ligaParaCliente(cliente.telefone[0], cliente.telefone[1]);
ligaParaCliente(...cliente.telefone);


const encomenda = {
    destinatario: cliente.nome,
    ...cliente.enderecos[0],
}

console.log(encomenda);


// node aula3/espalhamento.js