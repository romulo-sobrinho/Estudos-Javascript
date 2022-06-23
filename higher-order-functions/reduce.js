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

function totalSalary(total, employee) {
  return total + employee.salary; 
}

let resultadoReduce = employees.reduce(totalSalary, 0);
console.log(`Resultado Reduce
Total Salários: ${resultadoReduce}`);
