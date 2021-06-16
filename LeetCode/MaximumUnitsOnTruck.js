/* eslint-disable no-console */
const maximumUnits = (boxTypes, truckSize) => {
  let units = 0;
  let numOfBoxes = 0;

  boxTypes.sort((a, b) => b[1] - a[1]);

  for (let i = 0; i < boxTypes.length; i += 1) {
    if (numOfBoxes + boxTypes[i][0] > truckSize) {
      const difference = truckSize - numOfBoxes;
      units += difference * boxTypes[i][1];
      break;
    } else {
      numOfBoxes += boxTypes[i][0];
      units += boxTypes[i][0] * boxTypes[i][1];
    }
  }

  return units;
};

console.log(maximumUnits([[1, 3], [2, 2], [3, 1]], 4)); // output = 8
