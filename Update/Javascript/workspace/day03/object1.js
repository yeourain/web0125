const user = {
    name: "김영선",
    age: 20,
    address: "서울시",
    introduce: () => {
        console.log("안녕하세요.");
    },
};

// console.log(user);
// console.log(typeof user); //object
// user.introduce();
// console.log(user["address"]);

// .로 직접 접근할 수도 있고, key값의 규칙성이 필요하다면 [""]문법을 사용하여 접근한다

const programming = {
    pro1: "java",
    pro2: "dbms",
    pro3: "html, css",
    pro4: "javascript",
};

console.log(programming);
//javascript만 출력하기
console.log(programming.pro4);
console.log(programming["pro4"]);
programming.pro1 = "java1";
console.log(programming);
programming.pro5 = "git";
console.log(programming);

//programming 객체의 값을 하나씩 출력하기
for (let i in programming) {
    console.log(programming[i]);
}

//const는 재할당이 안되어야하지만 객체에서는 내용이 바뀐다

const number = 10;
console.log(number);
number = 20;
console.log(number);
