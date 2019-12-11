/* eslint-disable no-console */
const hackerrankInString = (s) => {
  const match = 'hackerrank'.split('');

  for (let i = 0; i < s.length; i += 1) {
    if (s[i] === match[0]) {
      match.shift();
    }
  }

  if (match.length === 0) {
    return 'YES';
  }

  return 'NO';
};

console.log(hackerrankInString('hereiamstackerrank')); // Answer = 'YES'
