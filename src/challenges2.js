// Desafio 10
function techList(array, string) {
  const orderedArray = array.sort();
  let objectArray = [];
  for (let index = 0; index < array.length; index += 1) {
    let myObject = {
      tech: orderedArray[index],
      name: string,
    };
    objectArray.push(myObject);
  }
  return objectArray;
}
console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'));
// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
