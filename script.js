'use strict';

// Selecting Elements
let score0EL = document.querySelector('#score--0');
let score1EL  = document.getElementById('score--1');
let diceEL = document.querySelector('.dice')


// starting condations
score0EL.textContent = 0;
score1EL.textContent = 0;
diceEL.classList.add('hidden');