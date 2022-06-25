let students = [
  {name: "João Carlos", age: 12, year: "7º"}
];

function addStudent(name, age, year, callback) {
  setTimeout(()=>{
    students.push({name: name, age: age, year: year});
    callback();
  }, 1000);
}

function listStudents() {
  console.table(students);
}

addStudent("Bruno Rômulo", 14, "9º", listStudents);