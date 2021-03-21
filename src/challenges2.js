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

// Desafio 11
function timesRepeated(number, numberArray) {
  let count = 0;
  for (let i in numberArray) {
    if (number === numberArray[i]) {
      count += 1;
    }
  }
  return count;
}
function tooRepeated(numberArray) {
  let count = 0;
  let result = 0;
  for (let i in numberArray) {
    if (count < timesRepeated(numberArray[i], numberArray)) {
      count = timesRepeated(numberArray[i], numberArray);
    }
  }
  if (count >= 3) {
    result = true;
  } else {
    result = false;
  }
  return result;
}

function outOfBundary(numberArray) {
  let out = 0;
  for (let i in numberArray) {
    if (numberArray[i] > 9 || numberArray[i] < 0) {
      out += 1;
    }
  }
  return out;
}
function generatePhoneNumber(numberArray) {
  let result = '';
  if (numberArray.length !== 11) {
    result = 'Array com tamanho incorreto.';
  } else if (tooRepeated(numberArray) || outOfBundary(numberArray) > 0) {
    result = 'não é possível gerar um número de telefone com esses valores';
  } else {
    result = `(${numberArray[0]}${numberArray[1]}) ${numberArray[2]}${numberArray[3]}${numberArray[4]}${numberArray[5]}${numberArray[6]}-${numberArray[7]}${numberArray[8]}${numberArray[9]}${numberArray[10]}`;
  }
  return result;
}

// Desafio 12
function compareSum(lineA, lineB, lineC) {
  let bc = lineB + lineC;

  let ab = lineA + lineB;

  let ac = lineA + lineC;
  if (lineA < bc && lineB < ac && lineC < ab) {
    return true;
  }
}
function compareAbs(lineA, lineB, lineC) {
  let bc = Math.abs(lineB - lineC);

  let ab = Math.abs(lineA - lineB);

  let ac = Math.abs(lineA - lineC);
  if (lineA > bc && lineB > ac && lineC > ab) {
    return true;
  }
}
function triangleCheck(lineA, lineB, lineC) {
  let result = false;
  if (compareAbs(lineA, lineB, lineC) && compareSum(lineA, lineB, lineC)) {
    result = true;
  }
  return result;
}

// Desafio 13
function hydrate(phrase) {
  // seu código aqui
  let reg = /\d+/g;
  let result = phrase.match(reg);
  let soma = 0;
  let text = '';
  for (let index = 0; index < result.length; index += 1) {
    soma += parseInt(result[index]);
  }
  if (soma === 1) {
    text = `${soma} copo de água`;
  } else {
    text = `${soma} copos de água`;
  }
  return text;
}
module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
