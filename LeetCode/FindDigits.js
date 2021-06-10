/* eslint-disable no-console */
function findDigits(n) {
  const nArr = n.toString().split('');
  let counter = 0;

  for (let i = 0; i < nArr.length; i += 1) {
    if (n % Number(nArr[i]) === 0) {
      counter += 1;
    }
  }

  return counter;
}

console.log(findDigits(11)); // Answer = 2
