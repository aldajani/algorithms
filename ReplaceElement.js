/* eslint-disable no-console */
const replaceElements = (arr) => {
  const array = arr;
  for (let i = 0; i < arr.length; i += 1) {
    if (i === arr.length - 1) {
      array[i] = -1;
    } else {
      array[i] = Math.max(...arr.slice(i + 1));
    }
  }
  return array;
};

console.log(replaceElements([17, 18, 5, 4, 6, 1])); // Answer = [18, 6, 6, 6, 1, -1]
