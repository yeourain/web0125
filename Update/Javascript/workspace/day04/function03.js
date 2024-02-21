// function f() {
//     let x = 20;
//     console.log(x);
// }

// f();

let x = 10;
function f() {
    let x = 20;
    console.log(x);
}
f();
console.log(x);

//전역변수가 global이 가지고 있다
//전역에 접근하기위해서는 global로 만들어야한다
//브라우저에서는 전역에 Window node일 때 global로
//자동으로 바꿔주는 전역 예약어가 있다
// globalThis

globalThis.x = 10;

function f() {
    let x = 20;
    console.log(globalThis.x);
}

f();
