/* eslint-disable no-unused-vars */
// Forces us to use keywords
'use strict';

// Keep track of score
let score = 0;


// Greetings
let userName;
function greetings() {
  alert('Hello! Welcome to my About me webpage.');
  userName = prompt('First what is your name?');
  console.log('userName:' + userName);
  alert('Hello, ' + userName + '.  Let\'s see how well you know me.');
}
greetings();

// 1st question
// prompt 1st question
function questionOne() {

  let thailand = prompt('Was I born in Thailand? y/n or yes/no').toLowerCase();
  console.log('Born in Thailand: ' + thailand);

  // if user guess is correct
  if (thailand === 'yes' || thailand === 'y') {
    alert('Yes, that\'s correct!');
    score++;
  } else {
    alert('Sorry that is incorrect.');
  }
}
questionOne();

// 2nd question
// prompt 2nd question
function questionTwo() {

  let marines = prompt('Did I served in the Marine Corps? y/n or yes/no').toLowerCase();
  console.log('In the Marnes: ' + marines);

  // if user guess is correct
  if (marines === 'yes' || marines === 'y') {
    alert('Yes, that\'s correct! I did. Semper Fi.');
    score++;
  } else {
    alert('Sorry that is incorrect.');
  }
}
questionTwo();

// 3rd question
// prompt 3rd question
function questionThree() {

  let psu = prompt('Did I go to Portland State University? y/n or yes/no').toLowerCase();
  console.log('Go to PSU: ' + psu);

  // if user guess is correct
  if (psu === 'yes' || psu === 'y') {
    alert('Yes, that\'s correct! I did. Go Vikings!');
    score++;
  } else {
    alert('Sorry that is incorrect.');
  }
}
questionThree();


// 4th question
// prompt 4th question
function questionFour() {

  let up = prompt('Did I go to University of Portland? y/n or yes/no').toLowerCase();
  console.log('Go to UP: ' + up);

  //if user guess is correct
  if (up === 'yes' || up === 'y') {
    alert('Yes, that\'s correct!');
    score++;
  } else {
    alert('Sorry that is incorrect.');
  }
}
questionFour();

// 5th question
// prompt 5th question
function questionFive() {

  let codefellow = prompt('Am I currently attending Code Fellows? y/n or yes/no').toLowerCase();
  console.log('Attending Code Fellows: ' + codefellow);

  // if user guess is correct
  if (codefellow === 'yes' || codefellow === 'y') {
    alert('Yes, I am!');
    score++;
  } else {
    alert('Sorry that is incorrect.');
  }
}
questionFive();


alert('Let\'s play a guessing game.');
alert('I\'m thinking of a number between 1 - 10.  Can you guess the secert number? I\'ll give you 4 attempts');


// Questions 6
function questionSix() {

  let secertNum = '7';
  let counter = 0;

  while (counter < 4) {
    let guessNum = prompt('Pick a number from 0 - 10');
    counter++;

    if (guessNum === secertNum) {
      alert('Great job! That is correct!');
      score++;
      break;

    } else if (guessNum < secertNum) {
      alert('Too low, please try again');

    } else if (guessNum > secertNum) {
      alert('Too high, please try again');

    }

    if (counter === 0) {
      alert('You have 4 more attempts!');
    } else if (counter === 1) {
      alert('You have 3 more attempts!');
    } else if (counter === 2) {
      alert('You have 2 more attempts!');
    } else if (counter === 3) {
      alert('This is your last attempt!');
    }

  }

  alert('The secret number is ' + secertNum);
}

questionSix();


// Question 7
function questionSeven() {
  let color = [
    'red',
    'green',
    'blue',
  ];

  let attempt = 6;

  let correctGuess = false;

  while (attempt > 0) {
    let userGuess2 = prompt('What are the primary colors used in programming languages? Hint: RBG').toLowerCase();
    console.log(userGuess2);
    for (let i = 0; i < color.length; i++) {
      if (userGuess2 === color[i]) {
        alert('Good job! You answered correctly!');
        score++;
        correctGuess = true;
        break;
      }
    }
    attempt--;
    if (correctGuess === true) {
      break;
    }
  }
  if (attempt === 0) {
    alert('The primary colors used in programming languages are Red, Green, and Blue (RGB).');
  }
}
questionSeven();

score = alert('You got ' + score + ' questions correct!');

alert('Thank you for visiting.  I hope you come back again ' + userName + '!');
