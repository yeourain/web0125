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

function User(name, age, point) {
    this.name = name;
    this.age = age;
    this.point = point;
}

const bakery = new Object();
const user1 = new User("짱구", 5, 150);
const user2 = new User("철수", 6, 360);
const user3 = new User("맹구", 5, 10);
const user4 = new User("유리", 7, 770);
const user5 = new User("훈이", 6, 0);

bakery.user1 = user1;
bakery.user2 = user2;
bakery.user3 = user3;
bakery.user4 = user4;
bakery.user5 = user5;

console.log(bakery);

for (let i = 0; i < 5; i++) {
    console.log(bakery[`user${i + 1}`].point);
}
