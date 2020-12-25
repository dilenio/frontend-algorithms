// Crie um algoritmo que percorre uma array unidimensional contendo letras e números: [ “a”, 10, “b”, “hola”, 122, 15]
// Obtenha uma array contendo apenas as letras
// Obtenha uma array contendo apenas os números
// Obtenha o maior número da array acima

const uniArray = ['a', 10, 'b', 'hola', 122, 15];

const contentArray = (array, type) => {
  return array.filter((item) => typeof item === type && item);
};

const arrayOfLetters = contentArray(uniArray, 'string');
const arrayOfNumbers = contentArray(uniArray, 'number');

console.log(arrayOfLetters);
console.log(arrayOfNumbers);

const biggestNumber = arrayOfNumbers.sort((a, b) => b - a)[0];

console.log(biggestNumber);
