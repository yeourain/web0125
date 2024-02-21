//프로토타입
//new 뒤에 나오는 생성자를 자바스크립트에서는 프로토 타입이라고 부른다
//프로토타입은 함수로 선언하여 사용한다.
//단, 반드시 대문자로 시작해야한다.

function User(id, pw, name, age, subject = "javascript") {
    this.id = id;
    this.pw = pw;
    this.name = name;
    this.age = age;
    this.subject = subject;
}

user1 = new User("kys", "1234", "김영선", 20);
user2 = new User("ys", "12345", "영선", 20);
console.log(user1, user2);
