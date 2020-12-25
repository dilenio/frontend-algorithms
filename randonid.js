const generateId = () => {
  const alphanumeric = '0123456789abcdefghijklmnopqrstuvwxyz';

  let generated = '';
  for (let index1 = 0; index1 < 4; index1++) {
    for (let index2 = 0; index2 < 4; index2++) {
      generated += alphanumeric.charAt(
        Math.trunc(Math.random() * alphanumeric.length)
      );
    }
    index1 < 3 && (generated += '-');
  }
  return generated;
};

const id = generateId();

console.log(id);
