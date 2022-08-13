// Factory Function
function inserirUsuario(name,age) {
  return {
    name: name,
    age: age
  }
}
console.log(inserirUsuario("Rômulo", 35))


// Constructor Function
function InserirUsuario(name, age) {
  this.name = name,
  this.age = age
}
user = new InserirUsuario("Rômulo", 35)
console.log(user)
// console.log(new InserirUsuario("Rômulo", 35))

