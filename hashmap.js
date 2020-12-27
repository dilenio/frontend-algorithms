const hashMap = {
  addition: (array) => array.reduce((acc, curr) => acc + curr),
  subtraction: (array) => array.reduce((acc, curr) => acc - curr),
  multiplication: (array) => array.reduce((acc, curr) => acc * curr),
  division: (a, b) => {
    if (b === 0) return 'Can not divide by zero';
    return a / b;
  },
};

console.log(hashMap.addition([1, 2, 3, 4]));
console.log(hashMap.subtraction([1, 2, 3, 4]));
console.log(hashMap.multiplication([1, 2, 3, 4]));
console.log(hashMap.division(22, 0));
console.log(hashMap.division(543, 46));
