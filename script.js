"use strict";

// Selecting elements
const score0El = document.getElementById("score--0");
const score1El = document.getElementById("score--1");
const diceEl = document.querySelector(".dice");

const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");


const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

let currentScore = 0;

// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");

// Rolling dice functionality
btnRoll.addEventListener("click", function () {
  // 1. Generate random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;

  // Display dice
  diceEl.classList.remove("hidden");
  diceEl.src = `dice-${dice}.png`;

  // Check for rolled 1
  if (dice != 1) {
    // Add dice to current score
    currentScore += dice;
    current0El.textContent = currentScore;
  } else {
    // switch to next player
  }
});
