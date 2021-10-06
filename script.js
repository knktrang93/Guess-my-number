'use strict';

const hiddenNumber = Math.trunc(Math.random() * 20 + 1);
let chances = 20;

// conditions at check button
document.querySelector('.check-btn').addEventListener('click', function () {
  const guessNumber = Number(document.querySelector('.guess-number').value);
  //if there is no input
  if (!guessNumber) {
    document.querySelector('.comment').textContent = 'Input a number below! ⬇';
  } //if input equals secret number
  else if (guessNumber === hiddenNumber) {
    document.querySelector('.comment').textContent =
      "Congratulations! You've guessed the secret number!";
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.hidden-number').textContent = hiddenNumber;
  } //if input is higher than secret number
  else if (guessNumber > hiddenNumber) {
    if (chances > 1) {
      document.querySelector('.comment').textContent = 'Too high!';
      chances -= 1;
      document.querySelector('.chances').textContent = chances;
    } else {
      document.querySelector('.chances').textContent = 0;
      document.querySelector('.comment').textContent = 'You lost! 😔 ';
    }
  } //if input is lower than secret number
  else if (guessNumber < hiddenNumber) {
    if (chances > 1) {
      document.querySelector('.comment').textContent = 'Too low!';
      chances -= 1;
      document.querySelector('.chances').textContent = chances;
    } else {
      document.querySelector('.chances').textContent = 0;
      document.querySelector('.comment').textContent = 'You lost! 😔 ';
    }
  }
});

document.querySelector('.new-game').addEventListener('click', function () {
  const hiddenNumber = Math.trunc(Math.random() * 20 + 1);
  let chances = 20;
  document.querySelector('.hidden-number').textContent = '?';
  document.querySelector('.chances').textContent = chances;
  document.querySelector('.comment').textContent = 'Start guessing! ⬇';
  document.querySelector('.guess-number').value = '';
  document.querySelector('body').style.backgroundColor = '#000000';
});
