//HTML 요소를 id로 가져오기
let title = document.getElementById('title');
console.log(title);

//HTML 요소를 class로 가져오기
let divBox = document.getElementsByClassName('div-box');
console.log(divBox);

//가져온 요소에서 특정요소만 사용하고 싶다면 인덱스를 사용한다
console.log(divBox[0]);

//querySelector를 사용하면 좀 더 자유롭게 선택자를 사용하여 요소를 가져올 수 있다
let bgRed = document.querySelector('#bg-red');
console.log(bgRed);

//querySelectorAll은 여러 요소를 가져온다
let divBorder = document.querySelectorAll('.div-border');
console.log(divBorder);

//가져온 요소의 text 가져오기
console.log(title.innerText);

//가져온 요소의 text 수정하기(태그는 적용되지 않음!!)
title.innerText = '<i>innerText 사용!!<i>';

//가져온 요소의 text와 내부 태그까지 가져오기
console.log(bgRed.innerHTML); //아무것도 없음
//가져온 요소의 내부에 태그 삽입하기
bgRed.innerHTML = '<div>내부에 div넣기!!<div>';

//요소의 특정 속성 가져오기
console.log(bgRed.getAttribute('class'));

//요소의 속성 변경하기
bgRed.setAttribute('style', 'background-color : red');

//나머지 div도 DOM을 활용하여 id와 일치하는 background-color로 변경하기
document
  .querySelector('#bg-green')
  .setAttribute('style', 'background-color:green');

document
  .querySelector('#bg-yellow')
  .setAttribute('style', 'background-color:yellow');

//div-border 클래스를 가진 요소들은 테두리 두께를 2px를 주고 5px 둥글게 만들기
// document
//     .querySelectorAll(".div-border")[0]
//     .setAttribute("style", "border : 2px solid black; border-radius:5px");

let borders = document.querySelectorAll('.div-border');
for (let i = 0; i < borders.length; i++) {
  borders[i].setAttribute(
    'style',
    'border : 2px solid black; border-radius:5px'
  );
}

//CSS STYLE변경
//요소.style.속성명
//html요소의 프로퍼티를 직접 수정하는 방법이다
console.log(bgRed.style);
console.log(bgRed.style.backgroundColor);
bgRed.style.backgroundColor = 'red';

//setAttribute()는 인라인 스타일을 모두 지우고 덮어쓰는 반면
//style 프로퍼티를 사용하면 특정 프로퍼티에 직접 접근해서 수정할 수 있다
//속성명은 그대로 사용하면되지만 background-color처럼 - 가 포함된 속성은 카멜 표기법으로 변환하여 사용한다
