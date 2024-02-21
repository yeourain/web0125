// function number(num) {
//     console.log("number 함수 실행");
//     console.log(`num : ${num + 10}`);
//     return num + 10;
// }

// let result = number(10);
// console.log(result);

// //javascript의 함수는 변수에 저장할 수 있다
// //변수에 저장해서 사용시에는 함수명을 생략할 수 있다
// //함수이름을 작성해도 해당 함수를 사용할 대는 변수 이름을 대신 사용한다

// let number2 = function test(num) {
//     console.log("test실행");
//     return num + 100;
// };

// console.log(number2(100));

// //함수를 매개변수로 넘겨줄 수 있다
// function resultNum(num) {
//     for (let i = 0; i < num; i++) {
//         console.log(i);
//     }
// }

// resultNum(10);

let printAll = function (n) {
    console.log(n);
};

let printAdd10 = function (n) {
    if (n % 2 == 0) {
        console.log(n + 10);
    }
};

function resNum(num, f) {
    for (let i = 0; i < num; i++) {
        f(i);
    }
}

// 콜백함수 : 함수의 매개변수로 전달되는 함수를 의미한다
// resNum(10, printAll); //0부터 9까지의 숫자를 출력
// resNum(10, printAdd10); //짝수일때만 10을 더한 값을 출력

resNum(10, function (n) {
    console.log(n * 2);
});
