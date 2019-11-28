var uniqueOccurrences = function(arr) {
  let hash = {};
  let uniqueVals = [];
  
  for (let i = 0; i < arr.length; i++) {
    if (hash.hasOwnProperty(arr[i])) {
      hash[arr[i]]++;
    } else {
      hash[arr[i]] = 1;
    }
  }
  
  for (let key in hash) {
    if (uniqueVals.includes(hash[key])) {
      return false;
    }
    uniqueVals.push(hash[key])
  }
  
  return true;
};

console.log(uniqueOccurrences([1,2,2,1,1,3])) // Answer = true