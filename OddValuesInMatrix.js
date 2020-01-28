/* eslint-disable no-console */
const oddCells = (n, m, indices) => {
  let oddNumbers = 0;
  const matrix = [];
  for (let i = 0; i < n; i += 1) matrix.push(new Array(m).fill(0));

  indices.forEach((index) => {
    for (let i = 0; i < matrix[index[0]].length; i += 1) matrix[index[0]][i] += 1;
    for (let i = 0; i < matrix.length; i += 1) matrix[i][index[1]] += 1;
  });

  matrix.forEach((row) => {
    row.forEach((value) => {
      if (value % 2 === 1) oddNumbers += 1;
    });
  });

  return oddNumbers;
};

console.log(oddCells(2, 3, [[0, 1], [1, 1]])); // Answer = 6
