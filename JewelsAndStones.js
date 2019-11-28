var numJewelsInStones = function(J, S) {
  let arr = J.split('');
  let arr2 = S.split('');
  let counter = 0;
  arr.forEach(el => {
    arr2.forEach(el2 => {
      if (el === el2) {
        counter++
      }
    });
  });
  return counter;
};

console.log(numJewelsInStones('aA', 'aAAbbbb')); // answer = 3