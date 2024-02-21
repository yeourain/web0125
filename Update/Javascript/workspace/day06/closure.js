function outer() {
  let outerVar = '외부함수';

  function inner() {
    console.log(outerVar); //inner함수는 outerVar 변수에 접근할 수 있다
  }

  return inner; //inner 함수를 반환하면 클로저가 생성됨
}

const closureTest = outer();
console.log(closureTest());
console.log(closureTest);
