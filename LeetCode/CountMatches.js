/* eslint-disable no-console */
const countMatches = (items, ruleKey, ruleValue) => {
  let index = 0;
  let matches = 0;

  if (ruleKey === 'type') index = 0;
  if (ruleKey === 'color') index = 1;
  if (ruleKey === 'name') index = 2;

  items.forEach((item) => {
    if (item[index] === ruleValue) matches += 1;
  });

  return matches;
};

console.log(countMatches([['phone', 'blue', 'pixel'], ['computer', 'silver', 'lenovo'], ['phone', 'gold', 'iphone']], 'color', 'silver')); // output = 1
