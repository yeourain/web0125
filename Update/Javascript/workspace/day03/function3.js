// let sayHello = function () {
//     console.log("안녕하세요!");
// };

// console.log(typeof sayHello);
// console.log(sayHello); //sayHello 함수자체를 출력, 내용 표시되지않고 함수 객체 자체가 출력

// //변수를 함수처럼 호출하면 함수안의 내용이 출력
// sayHello();

// //ES6, 익명함수일 경우 function 키워드를 생략한 뒤 =>로 함수를 선언할 수 있다

// data = 10;
// console.log(data);

// data = function () {
//     console.log("함수실행");
// };

// data();

// data = () => {
//     console.log("함수실행1");
// };
// data();

function add(number1, number2, result) {
    result(number1 + number2);
}

result1 = (result) => console.log(result);
add(10, 20, result1);

add(10, 20, (result) => console.log(result));

function add2(number1, number2) {
    return () => {
        console.log(number1 + number2);
    };
}

print = add2(100, 200);
print();

//비동기 작업처리나 함수형 프로그래밍에서 많이 사용하는 방식
function add3(number1, number2) {
    //add3 함수 정의(매개변수2개)
    return function () {
        //첫번째 익명함수, 두번째 익명함수를 반환
        return function () {
            //두번째 익명함수, console.log(number1 + number2) 코드실행하여 콘솔에 출력
            console.log(number1 + number2);
        };
    };
}

add3(1, 2)()();
