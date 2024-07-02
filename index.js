const text = document.querySelector(".banner__text");
const title = document.querySelector(".banner__title");

const frame1 = document.querySelector(".banner__frame1");
const frame2 = document.querySelector(".banner__frame2");
const frame3 = document.querySelector(".banner__frame3");
const frame4 = document.querySelector(".banner__frame4");

let isTextFinish = false;

let isFinish = false;
let textPos = -10;
let textSize = 13;

text.style.top = `${textPos}px`;
text.style.fontSize = `${textSize}px`;

function reDrawText() {
  if (textPos <= 50) {
    textPos += 1;
    text.style.top = `${textPos}px`;
  } else if (textSize <= 20.5) {
    textSize += 0.2;
    text.style.fontSize = `${textSize}px`;
  } else {
    isTextFinish = true;
  }
}

let titlePos = -206; //59
title.style.left = `${titlePos}px`;

let frame1_deg = 0;
let frame2_deg = 115;
let frame3_deg = 6.7;
let frame4_deg = -12.67;
let isMid = false;

frame1.style.transform = `rotate(${frame1_deg}deg)`;
frame2.style.transform = `rotate(${frame2_deg}deg)`;
frame3.style.transform = `rotate(${frame3_deg}deg)`;
frame4.style.transform = `rotate(${frame4_deg}deg)`;

function reDrawTitle() {
  if (!isTextFinish) return;
  if (titlePos <= 59) {
    titlePos += 2;
    title.style.left = `${titlePos}px`;
  }
}

let time = 0;
let rotateSpeed = 1;

function reDrawFrame() {
  if (!isTextFinish) return;
  if (time < 80) {
    frame1_deg -= rotateSpeed;
    frame2_deg += rotateSpeed;
    frame3_deg += rotateSpeed;
    frame4_deg -= rotateSpeed;

    frame1.style.transform = `rotate(${frame1_deg}deg)`;
    frame2.style.transform = `rotate(${frame2_deg}deg)`;
    frame3.style.transform = `rotate(${frame3_deg}deg)`;
    frame4.style.transform = `rotate(${frame4_deg}deg)`;

    rotateSpeed -= 0.01;
  } else if (time >= 100 && time <= 180) {
    frame1_deg += rotateSpeed;
    frame2_deg -= rotateSpeed;
    frame3_deg -= rotateSpeed;
    frame4_deg += rotateSpeed;

    frame1.style.transform = `rotate(${frame1_deg}deg)`;
    frame2.style.transform = `rotate(${frame2_deg}deg)`;
    frame3.style.transform = `rotate(${frame3_deg}deg)`;
    frame4.style.transform = `rotate(${frame4_deg}deg)`;

    rotateSpeed += 0.01;
  }
  time += 1;
}

function loop() {
  reDrawText();
  reDrawTitle();
  reDrawFrame();
  if (!isFinish) requestAnimationFrame(loop);
}

loop();
