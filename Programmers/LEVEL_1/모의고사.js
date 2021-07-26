function solution(answers) {
  let student1 = [1, 2, 3, 4, 5];
  let student2 = [2, 1, 2, 3, 2, 4, 2, 5];
  let student3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let students = [student1, student2, student3];
  let answer = [];

  for (let i = 0; i < students.length; i++) {
    for (let j = 0; students[i].length < answers.length; j++) {
      students[i] = [...students[i], ...students[i]];
    }

    students[i] = answers.filter((el, idx) => el === students[i][idx]).length;
  }

  let maxNum = Math.max(...students);

  if (students[0] === maxNum) answer.push(1);
  if (students[1] === maxNum) answer.push(2);
  if (students[2] === maxNum) answer.push(3);

  return answer;
}
