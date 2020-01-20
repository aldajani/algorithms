/* eslint-disable no-console */
const fairCandySwap = (A, B) => {
  const sumA = A.reduce((acc, el) => el + acc);
  const sumB = B.reduce((acc, el) => el + acc);
  const coordinate = [];

  for (let i = 0; i < A.length; i += 1) {
    for (let j = 0; j < B.length; j += 1) {
      if (A[i] === ((sumB - sumA + 2 * B[j]) / 2)) coordinate.push(A[i], B[i]);
    }
  }

  return coordinate;
};

console.log(fairCandySwap([1, 1], [2, 2])); // Answer = [1, 2]
