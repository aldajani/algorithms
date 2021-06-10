/* eslint-disable no-console */
function viralAdvertising(n) {
  let likes = 0;
  let recipients = 5;

  for (let i = 1; i <= n; i += 1) {
    likes += Math.floor(recipients / 2);
    recipients = Math.floor(recipients / 2) * 3;
  }

  return likes;
}

console.log(viralAdvertising(3)); // Answer = 9
