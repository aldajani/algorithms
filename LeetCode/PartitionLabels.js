/* eslint-disable no-console */
const partitionLabels = (S) => {
  const sHash = {};
  const partitionLengths = [];
  const isPartition = (partitionToCheck) => {
    sHash[partitionToCheck[partitionToCheck.length - 1]] -= 1;

    for (let i = 0; i < partitionToCheck.length; i += 1) {
      if (sHash[partitionToCheck[i]] !== 0) return false;
    }

    return true;
  };

  for (let i = 0; i < S.length; i += 1) {
    if (!sHash[S[i]]) {
      sHash[S[i]] = 1;
    } else {
      sHash[S[i]] += 1;
    }
  }

  let startIndex = 0;
  let endIndex = 1;
  let partition = S.slice(startIndex, endIndex);

  while (partition) {
    if (endIndex > S.length) {
      partitionLengths.push(partition.length);
      break;
    }

    if (isPartition(partition)) {
      partitionLengths.push(partition.length);
      startIndex = endIndex;
      endIndex = startIndex + 1;
    } else {
      endIndex += 1;
    }
    partition = S.slice(startIndex, endIndex);
  }

  return partitionLengths;
};

console.log(partitionLabels('ababcbacadefegdehijhklij')); // Answer = [9, 7, 8]
