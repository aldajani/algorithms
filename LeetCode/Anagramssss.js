/* eslint-disable no-console */
const findAnagram = (word, words) => {
  let anagramCount = 0;

  const sortedTestWord = word.split('').sort().join('');

  words.forEach((currentWord) => {
    if (currentWord.split('').sort().join('') === sortedTestWord) anagramCount += 1;
  });
  return anagramCount;
};

console.log(findAnagram('word', ['wrod', 'drow', 'werd', 'dreopp', 'owrd', 'wrodd'])); // ouput: 3
