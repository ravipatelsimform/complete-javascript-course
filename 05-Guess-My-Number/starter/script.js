'use strict';

// document.querySelector('.message').textContent = 'Correct number';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 137;

// document.querySelector('.guess').value = 26;

// const randomNumber = 14;
let randomNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highest = 0;
document.querySelector('.highscore').textContent = highest;

const handle = () => {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  if (!guess) {
    document.querySelector('.message').textContent = 'no Number!';
  } else if (guess < randomNumber) {
    score--;
    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent = 'Too Low!';
  } else if (guess > randomNumber) {
    score--;
    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent = 'Too high!';
  } else {
    document.body.style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = randomNumber;
    if (score > highest) {
      highest = score;
      document.querySelector('.highscore').textContent = highest;
    }
    document.querySelector('.message').textContent = 'Correct Number';
  }
};
const again = () => {
  randomNumber = Math.trunc(Math.random() * 20 + 1);
  document.body.style.backgroundColor = 'black';
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = null;
};

document.querySelector('.check').addEventListener('click', handle);
document.querySelector('.again').addEventListener('click', again);
