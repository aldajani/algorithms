/* eslint-disable no-console */
const countCharacters = (words, chars) => {
  const charsMap = {};
  let lengthSums = 0;

  for (let i = 0; i < chars.length; i += 1) {
    if (!charsMap[chars[i]]) {
      charsMap[chars[i]] = 1;
    } else {
      charsMap[chars[i]] += 1;
    }
  }

  words.forEach((word) => {
    const tempMap = { ...charsMap };
    for (let i = 0; i < word.length; i += 1) {
      if (tempMap[word[i]] > 0 && i === word.length - 1) {
        lengthSums += word.length;
      } else if (tempMap[word[i]] > 0) {
        tempMap[word[i]] -= 1;
      } else {
        break;
      }
    }
  });

  return lengthSums;
};

console.log(countCharacters(['hello','world','leetcode'], 'welldonehoneyr')); // Answer = 10
