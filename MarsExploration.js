const marsExploration = (s) => {
  let charCount = 0;

  for (let i = 0; i < s.length; i += 3) {
    if (s[i] !== 'S') {
      charCount++;
    }
    if (s[i + 1] !== 'O') {
      charCount++;
    }
      if (s[i + 2] !== 'S') {
      charCount++;
    }
  }
  
  return charCount;
}

console.log(marsExploration('SOOSSO')) // Answer = 3