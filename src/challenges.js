// Desafio 1
function compareTrue(boolValue1, boolvalue2) {
  return (boolValue1 && boolvalue2);
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return (area);
}

// Desafio 3
function splitSentence(phrase) {
  return (phrase.split(' '));
}

// Desafio 4
function concatName(stringArray) {
  stringArray = stringArray.join(' ');
  let splittedPhrase = stringArray.split(' ');
  let last = splittedPhrase[splittedPhrase.length - 1];
  let first = splittedPhrase[0];
  let lastAndFirst = `${last}, ${first}`;
  return (lastAndFirst);
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + ties;
  return points;
}

// Desafio 6
function maxValue(numberArray) {
  let max = 0;
  for (let i in numberArray) {
    if (numberArray[i] > max) {
      max = numberArray[i];
    }
  }
  return max;
}

function highestCount(score) {
  let count = 0;
  for (let i in score) {
    if (score[i] === maxValue(score)) {
      count += 1;
    }
  }
  return count;
}
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let dist1 = Math.abs(cat1 - mouse);
  let dist2 = Math.abs(cat2 - mouse);
  if (dist1 < dist2) {
    return 'cat1';
  }
  if (dist2 < dist1) {
    return 'cat2';
  }
  if (dist1 === dist2) {
    return ('os gatos trombam e o rato foge');
  }
}
// Desafio 8
function fizzBuzz(numberArray) {
  let result = [];
  for (let i in numberArray) {
    // if (numberArray[i] % 3 === 0 && numberArray[i] % 5 === 0) {
    //   result.push("fizzBuzz");
    // }
    if (numberArray[i] % 3 === 0) {
      result.push("fizz");
    } 
    if (numberArray[i] % 5 === 0) {
      result.push("buzz");
    } else if(numberArray[i] % 3 !== 0 && numberArray[i] % 5 !== 0 ) {
      result.push("bug!");
    }
  }
  return result;
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
