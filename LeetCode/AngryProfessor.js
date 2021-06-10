/* eslint-disable no-console */
function angryProfessor(k, a) {
  let startingStudents = a.length;

  for (let i = 0; i < a.length; i += 1) {
    if (a[i] > 0) {
      startingStudents -= 1;
    }
  }

  return startingStudents >= k ? 'NO' : 'YES';
}

console.log(angryProfessor(3, [-1, 2, 2])); // Answer = 'YES'
