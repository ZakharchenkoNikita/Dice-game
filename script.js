"use strict";

// Selecting elements
const score0El = document.getElementById("score--0");
const score1El = document.getElementById("score--1");
const diceEl = document.querySelector(".dice");

const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");

const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");

const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

let currentScore = 0;
let activePlayer = 0;

let scores = [0, 0];

let playing = true;

function init() {
  currentScore = 0;
  activePlayer = 0;
  playing = true;
  scores = [0, 0];

  score0El.textContent = 0;
  score1El.textContent = 0;

  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add("hidden");

  player0El.classList.remove("player--winner");
  player1El.classList.remove("player--winner");

  player0El.classList.add("player--active");
  player1El.classList.remove("player--active");
}

init();

function switchPlayer() {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer == 0 ? 1 : 0;

  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
}

// btn New game

btnNew.addEventListener("click", init);

// Rolling dice functionality
btnRoll.addEventListener("click", function () {
  if (playing) {
    // Generate random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    // Display dice
    diceEl.classList.remove("hidden");
    diceEl.src = `dice-${dice}.png`;

    // Check for rolled 1
    if (dice != 1) {
      // Add dice to current score
      currentScore += dice;

      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // switch to next player
      switchPlayer();
    }
  }
});

// Hold btn functionality
btnHold.addEventListener("click", function () {
  if (playing) {
    // Current score to active player score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // check if player`s score is >= 100
    if (scores[activePlayer] >= 100) {
      // finish the game
      playing = false;
      diceEl.classList.add("hidden");

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
    }

    // switch to next player
    switchPlayer();
  }
});
