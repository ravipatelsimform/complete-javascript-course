'use strict';
let diceNumber = 0;
let player = 0;
let player_0_score = 0;
let player_1_score = 0;
let player_0_current = 0;
let player_1_current = 0;
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');
const dice = document.querySelector('.dice');
const player__0 = document.querySelector('.player--0');
const player__1 = document.querySelector('.player--1');
const score__0 = document.querySelector('#score--0');
const score__1 = document.querySelector('#score--1');
const current__0 = document.querySelector('#current--0');
const current__1 = document.querySelector('#current--1');

function addCurrent_0() {
  current__0.textContent = player_0_current;
}
function addCurrent_1() {
  current__1.textContent = player_1_current;
}
function addCurrent(val) {
  if (player) {
    player_1_current += val;
    addCurrent_1();
  } else {
    player_0_current += val;
    addCurrent_0();
  }
}
function addScore_0() {
  player_0_score += current__0;
  current__0 = 0;
  addCurrent_0();
  score__0.textContent = player_0_score;
}
function addScore_1() {
  player_1_score += current__1;
  current__1 = 0;
  addCurrent_1();
  score__1.textContent = player_1_score;
}

function hold() {
  if (player) {
    addScore_1();
  } else {
    addScore_0();
  }
  switchUser();
}
function switchUser() {
  if (player) {
    player = 0;
    player_1_current = 0;
    addCurrent_1();
    player__0.classList.add('player--active');
    player__1.classList.remove('player--active');
  } else {
    player = 1;
    player_0_current = 0;
    addCurrent_0();
    player__0.classList.remove('player--active');
    player__1.classList.add('player--active');
  }
}
function rollDice() {
  diceNumber = Number(Math.trunc(Math.random() * 6) + 1);
  dice.src = `dice-${diceNumber}.png`;
  if (diceNumber === 1) {
    switchUser();
  } else {
    addCurrent(diceNumber);
  }
  console.log(diceNumber);
}
function newGame() {
  diceNumber = 1;
  dice.src = `dice-${diceNumber}.png`;
  player ? switchUser() : (player = 0);
  player_0_score = 0;
  player_1_score = 0;
  player_0_current = 0;
  player_1_current = 0;
  addCurrent_0();
  addCurrent_1();
  addScore_0();
  addScore_1();
}
btnRoll.addEventListener('click', rollDice);
btnHold.addEventListener('click', hold);
btnNew.addEventListener('click', newGame);
