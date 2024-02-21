//콜백함수
//두정수의 덧셈 결과를 출력

// function add(number1, number2, callback) {
//     if (callback) {
//         callback(number1 + number2);
//     }
//     return number1 + number2;
// }

// const print = (result) => {
//     console.log(result);
// };

// const result = add(1, 5, print);
// print 함수가 add함수에 callback으로 전달되었으므로
// add함수내에서 결과값이 print함수로 전달되고
// 콘솔에 결과가 출력됨

//두 정수의 곱셈을 구한뒤 결과에 2를 곱해서 출력하기
function mul(number1, number2, callback) {
    if (callback) {
        callback(number1 * number2);
    }
    return number1 * number2;
}

mul(4, 8, (result) => {
    console.log(result * 2);
});
