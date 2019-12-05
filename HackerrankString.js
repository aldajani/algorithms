const hackerrankInString = (s) => {
  let match = 'hackerrank'.split('');

  for (const char of s) {
    if (char === match[0]) {
      match.shift();
    }
  }
  
  if (match.length === 0) {
    return 'YES';
  }

  return 'NO';
}

console.log(hackerrankInString('hereiamstackerrank')) // Answer = 'YES'