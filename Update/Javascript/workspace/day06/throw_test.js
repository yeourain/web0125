// throw <error object>

// let error = new Error('오류가 발생했습니다');

// console.log(error.name);
// console.log(error.message);

let student = { age: 20 };
// let user = JSON.parse(student);
console.log(student);
// console.log(user);

try {
  if (student.age > 18) {
    throw new Error('학생은 19살 보다 많을 수 없습니다');
  }
  console.log('학생의 나이는 유효합니다');
} catch (error) {
  console.log('예외발생', error.message);
}
