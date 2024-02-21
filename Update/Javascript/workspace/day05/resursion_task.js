// 1. 숫자 1 + 2 + ... + n 계산하는 함수
// totalNum(n)

function totalNum(n) {
    if (n == 1) {
        return 1; //재귀함수 종료조건
    } else {
        return n + totalNum(n - 1);
    }
}

const result = totalNum(10);
console.log(result);

// 2. 아래 리스트 내의 항목을 하나씩 출력하는 함수
// printlist(list)
let list = {
    value: 1,
    next: { value: 2, next: { value: 3, next: { value: 4, next: null } } },
};

console.log(list.value);
console.log(list.next.next.value);

function printlist(list) {
    if (list) {
        console.log(list.value); //현재항목 출력
        printlist(list.next);
    }
}

printlist(list);
