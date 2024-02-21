// 1. 문자열을 인수로 받아 역순으로 뒤집을 결과를 반환하는 함수
// 콜백을 사용하여 문자열을 역순으로 출력

//함수명 printStr()   매개변수1개
//함수명 reverseStr() 콜백사용

function printStr(input) {
    // let reversed = "";
    // for (let i = input.length - 1; i >= 0; i--) {
    //     reversed += input[i];
    // }
    // return reversed;
    return input.split("").reverse().join("");
}

function reverseStr(input, callback) {
    const reversed = printStr(input);
    callback(reversed);
}

const data = "Hello, Javascript";

reverseStr(data, function (reversed) {
    console.log(reversed);
});

//콜백으로 호출

//출력결과 => tpircsavaJ ,olleH

// 2. 성과 이름을 전달받아서 풀네임을 만든뒤 000님 환영합니다 출력하기
function getFullName(lastName, firstName, callback) {
    if (callback) {
        callback(lastName + firstName);
    }
    return lastName + firstName;
}

getFullName("김", "영선", function (fullName) {
    console.log(`${fullName}님 환영합니다`);
});

// 3. 사용자의 나이를 입력 후 성인이면 true 반환, 아니면 false 반환
function checkAge(age, callback) {
    if (callback) {
        return callback(age >= 18);
    }
    return age >= 18;
}

const isAdult = (result) => result;

console.log(checkAge(20, isAdult));
console.log(checkAge(10, isAdult));
