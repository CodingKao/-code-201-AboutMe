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
  console.log("userName:" + userName);
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

// 6th question for loop
// Secert Number
function questionSix() {

  let secretNum = 7;
  
  // Counter to track # of guesses
  let counter = 0;
  
  alert('Let\'s play a guessing game.');
  
  // loop until counter is 4
  while(counter < 4) {
    
    // prompt user for guess
    
    let userGuess= prompt('I\'m thinking of a number between 1 - 10.  Can you guess it? You have 4 attempts?');
    console.log('You guessed: ' + userGuess);
    counter++;
    
    // validate the guess is equal to the secret num
    if (Number(userGuess) === secretNum) {
      // if user guess corectly alert and end loop
      alert('Yes, you guessed correctly.  Good Job!');
      score++;
      break;
      
      // if the guess is too high, prompt alert
    } else if (Number(userGuess) > secretNum) {
      alert('Your guess is too high!');
      console.log('You guessed: ' + userGuess);
      
      // if user guess is too low, prompt alert
    } else if (Number(userGuess) < secretNum) {
      alert('Your guess is too low!');
      console.log('You guessed: ' + userGuess);
      
    }
    
    
    if (counter === 0) {
      alert('You have 4 more attempts!!');
    } else if (counter === 1) {
      alert('You have 3 more attempts!!');
    } else if (counter === 2) {
      alert('You have 2 more attempts!!');
    } else if (counter === 3) {
      alert('This is your last attempt!');
    }
    
  }
}
questionSix();
// end after 4 gusses
alert('The secert number is ' + secretNum);


// 7th question for loop with arrays

// Define answer
let answers = ['red', 'green', 'blue'];

// how many attempts for user
let attempts = 0;

while (attempts < 6) {
  let userGuess2 = prompt('What are the primary colors used in programming languages? Hint: RBG');
  console.log(userGuess2);
  attempts++;

  if (userGuess2 === answers[0]) {
    alert('Yes! Red is one of the colors.  Good job!');
    console.log(userGuess2);
    score++;
    break;

  } else if (userGuess2 === answers[1]) {
    alert('Yes! Green is one of the colors.  Good Job!');
    console.log(userGuess2);
    score++;
    break;

  } else if (userGuess2 === answers[2]) {
    alert('Yes! Blue is one of the colors.  Good Job!');
    console.log(userGuess2);
    score++;
    break;

  } else if (userGuess2 === '') {
    alert('You have to pick a color!');
    console.log(userGuess2);

  } else if (userGuess2 !== '') {
    alert('Wrong. Try again.');
    console.log(userGuess2);

  }

}

alert('The primary colors used in programming languages are Red, Green, and Blue (RGB).');

while (score <= 7) {
  score = alert('You got ' + score + ' questions correct!');
}

alert('Thank you for visiting.  I hope you come back again ' + userName + '!');
