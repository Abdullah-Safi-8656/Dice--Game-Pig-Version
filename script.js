'use strict';

// Selecting Elements
const player0EL = document.querySelector('.player--0');
const player1EL = document.querySelector('.player--1');
const score0EL = document.querySelector('#score--0');
// const current_scoreEL0 = document.getElementById("current--0");
const score1EL  = document.getElementById('score--1');
// const current_scoreEL1 = document.getElementById('current--1');
const diceEL = document.querySelector('.dice')
const dice_roll_button = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold')



// starting condations
score0EL.textContent = 0;
score1EL.textContent = 0;
diceEL.classList.add('hidden');


// player_score
const scores = [0, 0];
let current_score = 0;
let active_player = 0;
let current_state = false;

// Switching players 
const switchPlayer = function() {
    document.getElementById(`current--${active_player}`).textContent = 0;
    current_score = 0;

    active_player = active_player === 0 ? 1 : 0;

    player0EL.classList.toggle('player--active');
    player1EL.classList.toggle('player--active');
};


let gameFunctionality = function() {
    const dice = Math.floor(Math.random() * 6) + 1;
    diceEL.classList.remove('hidden')
    diceEL.src = `dice-${dice}.png`


    if (dice !== 1) {

        current_score += dice;
        document.getElementById(`current--${active_player}`).textContent = current_score;
       

    } else {
 
        switchPlayer();

    }
};



// Rolling the dice functionality
dice_roll_button.addEventListener('click', gameFunctionality);


// Hold Button functionality
btnHold.addEventListener('click', function() {
    scores[active_player] += current_score;
    document.getElementById(`score--${active_player}`).textContent = scores[active_player];

    // setting condition when player score reaches 100
    if (scores[active_player] >= 100) {
        diceEL.classList.add('hidden');

        document.querySelector(`.player--${active_player}`).classList.add('player--winner');
        document.querySelector(`.player--${active_player}`).classList.remove('player--active');
        
        // disabling dice roll button and hold btn when the player score reaches 100
        dice_roll_button.disabled = true;
        btnHold.disabled = true;
        // setting the active player score to 0 after he/she wins
        document.getElementById(`current--${active_player}`).textContent = 0;

    } else{
    // calling the switch player function
    switchPlayer();
    };
});


