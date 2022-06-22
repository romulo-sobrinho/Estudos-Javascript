function employee(name, salary, age) {
  this.name = name;
  this.salary = salary;
  this.age = age;
}

let employees = [
  new employee("João Marcos", 4000, 25),
  new employee("Ana Luiza", 10000, 30),
  new employee("Maria Cecília", 8000, 24),
  new employee("Miguel Henrique", 9000, 32),
  new employee("Maria Lívia", 11000, 29)
];

function addStatus(employee) {
  employee.status = "Active";
  return employee; 
}

let resultadoMapStatus = employees.map(addStatus);
console.log("Resultado Map - Incrementa um novo dado ao funcionário");
console.table(resultadoMapStatus);


let resultadoMapSalary = employees.map((employee) => {
  employee.salary += 1000;
  return employee});
console.log("\n Resultado Map - salário incrementada em 1000 a todos os funcionários");
console.table(resultadoMapSalary);
