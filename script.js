'use strict';
// let a = document.querySelector('.message');
// // let b = a.textContent;
// a.textContent = '😂😁😁😁😂';
// console.log(a);
// let b = (document.querySelector('.number').textContent = 'Yo');
// console.log(b);
// document.querySelector('.guess').value = '55';
let score = 20;
let number = Math.trunc(Math.random() * 20 + 1);
let highscore = '0';
let dispMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
let dispScore = function (score) {
  document.querySelector('.score').textContent = score;
};
let dispNumber = function (number) {
  document.querySelector('.number').textContent = number;
};
let dispHighscore = function (highscore) {
  document.querySelector('.highscore').textContent = highscore;
};
let dispGuess = function (Guess) {
  document.querySelector('.guess').value = Guess;
};
// let setStyle = function (property, val) {  //Does not work
//   document.querySelector('body').style.property = val;
// };
document.querySelector('.check').addEventListener('click', () => {
  let guessnum = Number(document.querySelector('.guess').value);
  //No number is guessed
  if (!guessnum) {
    dispMessage('⛔ No number ⛔');
    //guessed number is low
  } else if (number !== guessnum) {
    if (score > 1) {
      dispMessage(number > guessnum ? 'Too low 📉' : 'Too high 📈');
      score--;
      dispScore(score);
    } else {
      dispMessage('You lost');
      dispScore('No lives left');
    }
  }
  // else if (number > guessnum) {
  //   //condition to put score always > 0
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too low 📉';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lost';
  //     document.querySelector('.score').textContent = 'No lives left';
  //   }
  //   //guess is higher than number
  // } else if (number < guessnum) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too high 📈';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     //guess is correct
  //     document.querySelector('.message').textContent = 'You lost';
  //     document.querySelector('.score').textContent = 'No lives left';
  //   }
  else {
    dispMessage('😃👀👀right number');
    // setStyle(backgroundColor, '#60b347');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    dispNumber(number);
    console.log(score);
    if (score > highscore) {
      highscore = score;
      dispHighscore(highscore);
    }
  }
});
console.log(number);
document.querySelector('.again').addEventListener('click', function () {
  number = Math.trunc(Math.random() * 20 + 1);
  console.log(number);
  score = 20;
  dispGuess('');
  dispMessage('Start guessing...');
  dispScore(score);
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
  dispNumber('?');
});
// window.location.reload();
