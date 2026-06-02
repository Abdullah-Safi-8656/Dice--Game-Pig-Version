'use strict';

// Selecting Elements
const score0EL = document.querySelector('#score--0');
const current_scoreEL0 = document.getElementById("current--0");
const score1EL  = document.getElementById('score--1');
const current_scoreEL1 = document.getElementById('current--1');
const diceEL = document.querySelector('.dice')
const dice_roll_button = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold')

const p2 = document.querySelector('.player--0');
const p1 = document.querySelector('.player--1');
// starting condations
score0EL.textContent = 0;
score1EL.textContent = 0;
diceEL.classList.add('hidden');


// player_score
let current_score = 0;


let gameFunctionality = function() {
    const dice = Math.floor(Math.random() * 6) + 1;
    diceEL.classList.remove('hidden')
    diceEL.src = `dice-${dice}.png`


    if (dice !== 1) {
        current_score += dice;
        current_scoreEL0.textContent = current_score
    } else {

    }
};

dice_roll_button.addEventListener('click', gameFunctionality);
