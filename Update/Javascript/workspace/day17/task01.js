// 1.
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(arr);
console.log('arr : ' + arr);
console.log('arr의 길이 : ' + arr.length);

// 2. 3.
function checkEvenNumber(num) {
  let remainder = num % 2;
  if (remainder === 0) {
    return true;
  }
  return false;
}

const myArr = [1, 2, 3, 4, 5];
let oddArr = [];
let evenArr = [];
myArr.forEach((element) => {
  if (checkEvenNumber(element)) {
    evenArr.push(element);
  } else {
    oddArr.push(element);
  }
});

console.log('짝수 : ' + evenArr);
console.log('홀수 : ' + oddArr);

// 4.
const myNums = [1, 2, 3, 4, 5];
let sum = 0;

for (let i = 0; i < myNums.length; i++) {
  sum += myNums[i];
}

console.log(myNums + ' 모든 요소들의 합 : ' + sum);

// 5.
const max = Math.max.apply(null, arr);

console.log('최대 : ' + max);

// 6.
const reverse = arr.reverse();

console.log('arr : ' + arr);
console.log('reverse : ' + reverse);

// 7.
let people = [
  { name: 'john', age: 25, gender: 'male', job: 'teacher' },
  { name: 'bob', age: 22, gender: 'male', job: 'student' },
  { name: 'lucy', age: 21, gender: 'female', job: 'student' },
];

console.log(people[1]);
console.log(people[2]);
