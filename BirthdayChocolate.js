/* eslint-disable no-console */
function birthday(s, d, m) {
  let answer = 0;
  for (let i = 0; i < s.length; i += 1) {
    const subArray = s.slice(i, i + m);
    const sum = subArray.reduce((a, b) => a + b);
    if (subArray.length === m && sum === d) {
      answer += 1;
    }
  }
  return answer;
}

console.log(birthday([2, 2, 1, 3, 2], 4, 2)); // Answer = 2
