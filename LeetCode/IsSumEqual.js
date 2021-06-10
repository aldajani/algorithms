/* eslint-disable no-console */
const isSumEqual = (firstWord, secondWord, targetWord) => {
  const getInteger = (word) => {
    const wordArr = word.split('');
    for (let i = 0; i < wordArr.length; i += 1) {
      wordArr[i] = String(wordArr[i].charCodeAt(0) - 97);
    }
    return Number(wordArr.join(''));
  };

  if ((getInteger(firstWord) + getInteger(secondWord)) === getInteger(targetWord)) {
    return true;
  }
  return false;
};

console.log(isSumEqual('acb', 'cba', 'cdb')); // output = true
