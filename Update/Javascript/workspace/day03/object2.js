// JS 객체의 필드는 프로퍼티라고 한다
let snack = new Object();
snack.name = "새우깡";
snack.price = 2500;
console.log(snack);

//빵집에 등록되지 않은 고객 5명이다
//1)
// 이름 : 짱구
// 나이 : 5
// 포인트 : 150

//2)
//이름 : 철수
//나이 : 6
//포인트 : 360

//3)
//이름 : 맹구
//나이 : 5
//포인트 : 10

//4)
//이름 : 유리
//나이 :7
//포인트 : 770

//5)
//이름 : 훈이
//나이 : 6
//포인트 : 0

//5명을 모두 빵집에 등록시킨다
// 빵집 객체를 만들고 각 고객을 프로퍼티로 선언한다
// 고객마다의 포인트 점수 출력하기

//1) 빵집객체생성
//2) 5명 고객 정보를 객체로 선언 후 빵집객체에 등록
//3) 반복문 통해 포인트만 출력

const bakery = new Object();
console.log(typeof bakery);
const bakery1 = {};
console.log(typeof bakery1);

const cs1 = { name: "짱구", age: 5, point: 150 };
const cs2 = { name: "철수", age: 6, point: 360 };
const cs3 = { name: "맹구", age: 5, point: 10 };
const cs4 = { name: "유리", age: 7, point: 770 };
const cs5 = { name: "훈이", age: 6, point: 0 };

bakery.cs1 = cs1;
bakery.cs2 = cs2;
bakery.cs3 = cs3;
bakery.cs4 = cs4;
bakery.cs5 = cs5;

console.log(bakery);

// for (let i in bakery) {
//     for (let j in i) {
//         console.log(j);
//     }
//     // console.log(bakery[i].point);
// }

for (let i in cs1) {
    console.log(i);
}

console.log("포인트 : " + bakery.cs1.point);
