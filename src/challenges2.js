// Desafio 10
function techList(array, string) {
  const orderedArray = array.sort();
  let result = '';
  if (array.length < 1) {
    result = 'Vazio!';
  } else {
    let objectArray = [];
    for (let index = 0; index < array.length; index += 1) {
      let myObject = {
        tech: orderedArray[index],
        name: string,
      };
      objectArray.push(myObject);
    }
    result = objectArray;
  }
  return result;
}

// // Desafio 11
// function timesRepeated(number, numberArray) {
//   let count = 0;
//   for (let i in numberArray) {
//     if (number === numberArray[i]) {
//       count += 1;
//     }
//   }
//   return count;
// }
// function tooRepeated(numberArray) {
//   let count = 0;
//   for (let i in numberArray) {
//     if (count < timesRepeated(numberArray[i], numberArray)) {
//       count = timesRepeated(numberArray[i], numberArray);
//     }
//   }
//   if (count)
//   return count;
// }
// function generatePhoneNumber(numberArray) {
//   let result = '';
//   if (numberArray.length !== 11) {
//     result = 'Array com tamanho incorreto.';
//   } else if (tooRepeated(numberArray)) {
//     result = 'não é possível gerar um número de telefone com esses valores';
//   }
// }

// console.log(tooRepeated([1, 2, 3, 4, 2, 2, 2]));
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
