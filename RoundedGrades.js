const gradingStudents = (grades) => {
  let roundedGrades = [];
  for (let i = 0; i < grades.length; i++) {
      if (grades[i] < 38) {
          roundedGrades.push(grades[i])
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
}