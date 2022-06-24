let employee = {
  id: 0,
  name: "Mario",
  cpf: "000.000.000-00",
  address: {
    cep: "72.620-210",
    complement: "Qd 301, conjunto 10, casa 05"
  }
};

console.table(employee);


let {name, cpf, address} = employee;

console.log(`\n Dados desestruturados
${name} ${cpf} ${address.cep}`);