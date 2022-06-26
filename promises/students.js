let students = [
  {name: "João Carlos", age: 12, year: "7º"}
];

function addStudent(name, age, year) {
  let promise = new Promise(function(resolve, reject) {
    setTimeout(()=>{
      students.push({name: name, age: age, year: year});
      let error = false;
      if(!error) {
        resolve();
      } else {
        reject({ msg: "Erro ao inserir um novo aluno" });
      }
    }, 1000);
  });
  return promise;
}

function listStudents() {
  console.table(students);
}

addStudent("Bruno Rômulo", 14, "9º", listStudents)
  .then(listStudents)
  .catch((error)=>{
    console.log(error);
  });