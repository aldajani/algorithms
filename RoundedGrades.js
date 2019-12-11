/* eslint-disable no-console */
const gradingStudents = (grades) => {
  const roundedGrades = [];
  for (let i = 0; i < grades.length; i += 1) {
    if (grades[i] < 38) {
      roundedGrades.push(grades[i]);
    } else if (grades[i] % 5 === 0) {
      roundedGrades.push(grades[i]);
    } else if ((grades[i] + 1) % 5 === 0) {
      roundedGrades.push(grades[i] + 1);
    } else if ((grades[i] + 2) % 5 === 0) {
      roundedGrades.push(grades[i] + 2);
    } else {
      roundedGrades.push(grades[i]);
    }
  }
  return roundedGrades;
};

console.log(gradingStudents([73, 67, 38, 33])); // Answer: [75, 67, 40, 33]
