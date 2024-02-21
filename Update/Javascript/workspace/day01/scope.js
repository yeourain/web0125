// if (10 > 1) {
//     var data = 100; //지역변수 같지만 함수의 scope가 아니기 때문에 영역 밖에서 사용가능하다
//     console.log(data);
// }
// console.log(data);

//지역변수
// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }
// console.log(i); // i는 for문 안에서 사용된 지역변수기 때문에 영역 밖에서 출력 불가능하다

//전역변수
// let i = 0;
// for (i = 0; i < 10; i++) {
//     console.log(i);
// }
// console.log(i);

// Node.js에서는 전역변수들을 모두 global 객체에서 관리한다
// 브라우저에서는 window 객체에서 전역변수를 관리한다
// 따라서 어디에서 사용될 지 모를 때는 globalThis 객체를 사용하면 된다

globalThis.x = 10;

function f() {
    let x = 20;
    globalThis.x = 30;
    console.log(x);
}

console.log(globalThis.x); //전역변수의 값
f(); //함수호출
console.log(globalThis.x); //전역변수의 값
