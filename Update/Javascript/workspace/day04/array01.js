let numbers = [10, 5, 3, 2, 7, 9];

// console.log(numbers);
// console.log(typeof numbers); //object

// //push() : 가장 마지막에 값 추가
// numbers.push(10);
// console.log(numbers);
// console.log(numbers[0], typeof numbers[0]);

// for (let i in numbers) {
//     // console.log(i); 인덱스가 추출됨
//     console.log(numbers[i]); //배열안의 요소값이 추출됨
// }

// // join() : 전달한 값으로 구분한 뒤 문자열로 리턴
// console.log([1, 2, 3, 4, 5].join(","));
// console.log(typeof [1, 2, 3, 4, 5].join(","));

// console.log(["java", "dbms", 3, 2024.02, true]);
// console.log(["java", "dbms", 3, 2024.02, true].join("/"));

// //slice(시작, 끝)
// //원하는 부분을 추출하기 위해서 시작 인덱스와 마지막 인덱스를 전달한다
// //마지막 인덱스는 포함되지 않는다!
// console.log(numbers);
// // [ 10, 5,  3, 2, 7, 9, 10 ]

// console.log(numbers[3]); //인덱싱
// console.log(numbers.slice[(1, 4)]); //undefined
// console.log(numbers.slice(1, 4)); //슬라이싱

// // pop() : 마지막 요소를 삭제
// console.log(numbers.pop());
// console.log(numbers);

// // shift() : 첫번째 요소를 삭제
// console.log(numbers.shift());
// console.log(numbers);

//splice(인덱스, 개수) : 삭제
console.log(numbers);
// numbers.splice(1, 4);
// console.log(numbers);

//splice(인덱스, 개수, ...args) : 교체
numbers.splice(1, 1, 0);
// console.log(numbers);

// for (let i of numbers) {
//     console.log(i);
// }

// forEach(callback) : 반복문
// numbers.forEach(function (num, i, numbers) {
//     // console.log(num);
//     // console.log(i);
//     // console.log(numbers);
// });

// numbers.forEach((num) => {
//     // console.log(num);
// });
// numbers.forEach(console.log);

// indexOf(값) : 값을 Array에서 찾은 뒤 인덱스 번호를 반환
// 값을 못찾으면 -1을 반환
console.log(numbers.indexOf(10));
console.log(numbers.indexOf(153));

//map(callback) : 기존 값을 원하는 값으로 변경하여 반환
console.log(
    numbers.map(function (num) {
        return 10;
    })
);

const number1 = [1, 2, 3, 4, 5];

//각 요소를 제곱하여 새로운 배열을 생성
const squaredNum = number1.map(function (num) {
    return num * num;
});

console.log(squaredNum);

//squaredNum에 있는 값을 전부 2로 나눈 값으로 변경
console.log(squaredNum.map((num) => num / 2));
console.log(squaredNum.map((num) => parseInt(num / 2)));

//filter(callback) : callback의 리턴값이 true일 때만 추출
console.log(number1);
console.log(
    number1.filter(function (num) {
        return num % 2 == 0;
    })
);

const person = {
    name: "김영선",
    age: 20,
    isAdult: function () {
        return this.age >= 18;
    },
};

const people = [
    { name: "짱구", age: 10 },
    { name: "철수", age: 5 },
    { name: "유리", age: 20 },
    { name: "맹구", age: 19 },
];
console.log(people);
console.log(typeof people);

const adult = people.filter(function (person) {
    return this.isAdult.call(person); //this를 person 객체로 설정
}, person);

console.log(adult);

const number2 = new Array(5);
// console.log(number2);

//fill(값) : 배열의 모든 요소를 해당 값으로 채우기
const number3 = new Array(5).fill(10);
// console.log(number3);

//fill(값, 시작인덱스, 종료인덱스) : 시작인덱스~종료인덱스-1까지 해당 값으로 채우기
const number4 = number3.fill(9, 1, 3);
console.log(number4);

number3.forEach((num) => {
    console.log(num);
});
