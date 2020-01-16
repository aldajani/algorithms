/* eslint-disable no-console */
const findAndReplacePattern = (words, pattern) => {
  const wordsThatMatch = [];
  const order = (string) => {
    const map = {};
    let counter = 0;
    const stringArr = string.split('').map((char) => {
      if (map[char]) {
        return map[char];
      }
      counter += 1;
      map[char] = counter;
      return counter;
    }).join('');
    return stringArr;
  };
  const patternOrder = order(pattern);
  words.forEach((word) => {
    if (order(word) === patternOrder) wordsThatMatch.push(word);
  });

  return wordsThatMatch;
};

console.log(findAndReplacePattern(['ktittgzawn', 'dgphvfjniv', 'gceqobzmis', 'alrztxdlah', 'jijuevoioe', 'mawiizpkub', 'onwpmnujos', 'zszkptjgzj', 'zwfvzhrucv', 'isyaphcszn'], 'zdqmjnczma')); // Answer = []
