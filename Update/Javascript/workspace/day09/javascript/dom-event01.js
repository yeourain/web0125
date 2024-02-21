let boxClick = document.querySelector("#click");
let boxOver = document.querySelector("#over");
let boxOut = document.querySelector("#out");
let boxOverOut = document.querySelector("#over-out");

function changBgGreen() {
    boxClick.setAttribute("style", "background-color : green");
}

boxClick.addEventListener("click", changBgGreen);

boxOver.addEventListener("mouseover", function () {
    boxOver.setAttribute("style", "background-color : red");
});

function changBgBlue() {
    boxOut.setAttribute("style", "background-color : blue");
}

boxOut.addEventListener("mouseout", changBgBlue);

boxOverOut.addEventListener("mouseover", changBgGreen);
boxOverOut.addEventListener("mouseout", changBgBlue);
