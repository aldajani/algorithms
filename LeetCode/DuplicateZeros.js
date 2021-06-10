/* eslint-disable no-console */
const duplicateZeros = (arr) => {
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === 0) {
      arr.splice(i, 0, 0);
      arr.pop();
      i += 1;
    }
  }
};

const input = [1, 0, 2, 3, 0, 4, 5, 0];

duplicateZeros(input);

console.log(input); // output = [1, 0, 0, 2, 3, 0, 0, 4]
