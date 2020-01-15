/* eslint-disable no-console */
const maxNumberOfBalloons = (text) => {
  const textHash = {};

  for (let i = 0; i < text.length; i += 1) {
    if (!textHash[text[i]]) {
      textHash[text[i]] = 1;
    } else {
      textHash[text[i]] += 1;
    }
  }

  let balloons = 0;
  let {
    b, a, l, o, n,
  } = textHash;

  while (b >= 1 && a >= 1 && l >= 2 && o >= 2 && n >= 1) {
    balloons += 1;
    b -= 1;
    a -= 1;
    l -= 2;
    o -= 2;
    n -= 1;
  }

  return balloons;
};

console.log(maxNumberOfBalloons('loonbalxballpoon')); // Answer = 2
