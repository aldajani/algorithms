/* eslint-disable no-console */
const detectCapitalUse = (word) => {
  const wordArr = word.split('');

  if (wordArr.every((letter) => letter.match(/[A-Z]/))) {
    return true;
  }

  if (wordArr.every((letter) => letter.match(/[a-z]/))) {
    return true;
  }

  if (word.slice(1).every((letter) => letter.match(/[a-z]/)) && wordArr[0].match(/[A-Z]/)) {
    return true;
  }

  return false;
};

console.log(detectCapitalUse('USA')); // Answer = true
