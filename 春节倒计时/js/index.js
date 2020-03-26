let dayEle = document.querySelector('.day');
let hourEle = document.querySelector('.hour');
let minEle = document.querySelector('.min');
let secEle = document.querySelector('.sec');
let _timer;

function nowTime() {
    let now = new Date();
    let newyear = new Date("2020-01-25 00:00:00");
    let ms = newyear - now;

    let days = Math.floor(ms / 1000 / 60 / 60 / 24);
    let hours = Math.floor(ms / 1000 / 60 / 60 % 24).toString().padStart(2, '0');
    let minutes = Math.floor(ms / 1000 / 60 % 60).toString().padStart(2, '0');
    let seconds = Math.floor(ms / 1000 % 60).toString().padStart(2, '0');

    dayEle.innerHTML = days;
    hourEle.innerHTML = hours;
    minEle.innerHTML = minutes;
    secEle.innerHTML = seconds;
}
function play() {
    _timer = setInterval(function () {
        nowTime();
    }, 1000);
}

play();