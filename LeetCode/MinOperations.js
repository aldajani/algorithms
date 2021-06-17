/* eslint-disable no-console */
const minOperations = (boxes) => {
  const answerArr = [];
  let numOfMoves = 0;

  for (let i = 0; i < boxes.length; i += 1) {
    for (let j = 0; j < boxes.length; j += 1) {
      if (i !== j) {
        if (boxes[j] === '1') {
          numOfMoves += Math.abs(i - j);
        }
      }
    }
    answerArr.push(numOfMoves);
    numOfMoves = 0;
  }

  return answerArr;
};

console.log(minOperations('001011')); // ouput = [11, 8, 5, 4, 3, 4]

// runtime = O(n^2)
