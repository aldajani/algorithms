/* eslint-disable no-console */
function getTotalX(a, b) {
  const A = Math.max(...a);
  const B = Math.min(...b);
  let answer = 0;

  for (let i = A; i <= B; i += 1) {
    if (a.every((el) => i % el === 0) && b.every((el) => el % i === 0)) answer += 1;
  }

  return answer;
}

console.log(getTotalX([2, 6], [24, 36])); // Answer = 2
