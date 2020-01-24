/* eslint-disable no-console */
/* eslint-disable max-len */
const flipAndInvertImage = (A) => {
  A.forEach((el) => {
    el.reverse();
    const arr = el;
    for (let i = 0; i < arr.length; i += 1) {
      if (arr[i] === 1) {
        arr[i] = 0;
      } else {
        arr[i] = 1;
      }
    }
  });

  return A;
};

console.log(flipAndInvertImage([[1, 1, 0], [1, 0, 1], [0, 0, 0]])); // Answer = [[1, 0, 0], [0, 1, 0], [1, 1, 1]]
