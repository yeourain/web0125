let $slideBox = $('.slide-box');
let $slideImgs = $('.slide-img');

//슬라이드 박스 너비
let slideWidth = 800;
//슬라이드 이미지 인덱스 번호
let currentIdx = 0;
//총 슬라이드 이미지 수
let slideCnt = $slideImgs.length;
console.log('slideCnt : ' + slideCnt);

checkEnd();

$('.next').on('click', function () {
  console.log('다음클릭');
  currentIdx++;
  console.log('currnetIdx : ' + currentIdx);
  $slideBox.css('left', -(currentIdx * slideWidth));
  $slideBox.css('transition', '0.5s ease');
  checkEnd();
});

//이전으로 넘어가는 것 이벤트 주기
$('.prev').on('click', function () {
  console.log('이전클릭');
  currentIdx--;
  console.log('currentIdx : ' + currentIdx);
  $slideBox.css('left', -(currentIdx * slideWidth));
  $slideBox.css('transition', '0.5s ease');
  checkEnd();
});

//처음 이미지와 마지막 이미지는 화살표 감추기
function checkEnd() {
  if (currentIdx <= 0) {
    $('.prev').css('display', 'none');
  } else {
    $('.prev').css('display', 'block');
  }

  if (currentIdx >= slideCnt - 1) {
    $('.next').css('display', 'none');
  } else {
    $('.next').css('display', 'block');
  }
}
