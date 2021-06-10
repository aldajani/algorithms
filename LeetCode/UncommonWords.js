/* eslint-disable no-console */
const uncommonFromSentences = (A, B) => {
  const uncommonWords = [];
  const wordsObj = {};
  const wordsArr = A.split(' ').concat(B.split(' '));

  for (let i = 0; i < wordsArr.length; i += 1) {
    if (!wordsObj[wordsArr[i]]) {
      wordsObj[wordsArr[i]] = 1;
    } else {
      wordsObj[wordsArr[i]] += 1;
    }
  }

  for (let i = 0; i < Object.keys(wordsObj).length; i += 1) {
    const key = Object.keys(wordsObj)[i];
    if (wordsObj[key] === 1) uncommonWords.push(key);
  }

  return uncommonWords;
};

console.log(uncommonFromSentences('this apple is sweet', 'this apple is sour')); // Answer = ['sweet', 'sour']
