import "./index.scss"

let square = document.getElementById("square");
let articleWidth = document.querySelector('.article').getBoundingClientRect().width;
rAF = window.requestAnimationFrame;
let animationRequest, count;
let start = null;
let path = articleWidth - 75;
let revPath = path * -1;
let step = -0.05;

const move = (timestamp) => {
    if (!start) {
        start = timestamp;
    }
    animationRequest = rAF(move)
    let progress = (timestamp - start);
    count = Math.min(step * progress, path);
    if(Math.trunc(count) === revPath) {
        cancelAnimationFrame(animationRequest)
    }
    square.style.transform = `translateX(${count}px)`;
}
rAF(move);
//progress - время, всегда растёт
//count = фактическая точка начала и конца пути
//step = шаг
//path = стартовая точка
//revPath = целевая точка