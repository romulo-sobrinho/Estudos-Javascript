function employee(name, salary, age) {
  this.name = name;
  this.salary = salary;
  this.age = age;
}

let employees = [
  new employee("João Marcos", 8000, 25),
  new employee("Ana Luiza", 10000, 30),
  new employee("Maria Cecília", 8000, 25),
  new employee("Miguel Henrique", 8000, 32),
  new employee("Maria Lívia", 11000, 29),
  new employee("Julia Leitícia", 7000, 25)
];

function ageLess25(employee) {
  return employee.age < 25; 
}

let resultadoFilterAge = employees.filter(ageLess25);
console.log("Resultado filter idade menor que 25");
console.table(resultadoFilterAge);

console.log("_______________________________________________________________________________")
let resultadoFilterSalary = employees.filter((employee) => {
  return (employee.salary == 8000 & employee.age == 25)
});
console.log("\n Resultado filter salário menor que 10000");
console.table(resultadoFilterSalary);
