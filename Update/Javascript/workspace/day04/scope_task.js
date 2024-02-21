//globalThis 변수 하나만 선언하여
//변수 num1과 변수 num2 값을 바꾸는 함수 만들기
// 출력순서는 동일

globalThis.num;
let num1 = 10;
let num2 = 20;

function changeNumber(num1, num2) {
    globalThis.num = num1;
    num1 = num2;
    num2 = globalThis.num;
    console.log(num1, num2);
}

changeNumber(num1, num2);
