/* eslint-disable no-unused-vars */
// Forces us to use keywords
'use strict';


// //Initial greetings prompt
// // eslint-disable-next-line no-unused-vars
// function greetings(){
//   alert('Hello! Welcome to my About me webpage.');
//   let userName = prompt('First what is your name?').toLowerCase();
//   console.log('userName:' + userName);
//   alert('Hello, ' + userName + '.  Let\'s see how well you know me.');

//   return userName;
// }


// 1st question
// prompt 1st question
let thailand = prompt('Was I born in Thailand? y/n or yes/no').toLowerCase();
console.log('Born in Thailand: ' + thailand);

//if user guess is correct
if (thailand === 'yes' || thailand === 'y') {
  alert('Yes, that\'s correct!');
} else {
  alert('Sorry that is incorrect.');
}


// 2nd question
// prompt 2nd question
let marines = prompt('Did I served in the Marine Corps? y/n or yes/no').toLowerCase();
console.log('In the Marnes: ' + marines);

//if user guess is correct
if (marines === 'yes' || marines === 'y') {
  alert('Yes, that\'s correct! I did. Semper Fi.');
} else {
  alert('Sorry that is incorrect.');
}


// 3rd question
// prompt 3rd question
let psu = prompt('Did I go to Portland State University? y/n or yes/no').toLowerCase();
console.log('Go to PSU: ' + psu);

//if user guess is correct
if (psu === 'yes' || psu === 'y') {
  alert('Yes, that\'s correct! I did. Go Vikings!');
} else {
  alert('Sorry that is incorrect.');
}


// 4th question
// prompt 4th question
let up = prompt('Did I go to University of Portland? y/n or yes/no').toLowerCase();
console.log('Go to UP: ' + up);

//if user guess is correct
if (up === 'yes' || up === 'y') {
  alert('Yes, that\'s correct!');
} else {
  alert('Sorry that is incorrect.');
}


// 5th question
// prompt 5th question
let codefellow = prompt('Am I currently attending Code Fellows? y/n or yes/no').toLowerCase();
console.log('Attending Code Fellows: ' + codefellow);

//if user guess is correct
if (codefellow === 'yes' || codefellow === 'y') {
  alert('Yes, I am!');
} else {
  alert('Sorry that is incorrect.');
}


// 6th question for loop
// Secert Number
const secretNum = 7;

// Counter to track # of guesses
let counter = 0;

// prompt user for guess
let userGuess= prompt('I\'m thinking of a number between 1 - 10.  Can you guess it? You have 4 attempts?');
console.log('You guessed: ' + userGuess);

// User guess limit 4
const guessLimit = 4;

// Compare user input with secret num
if(userGuess !==''){
  // validate user input is a number
  if(isNaN(userGuess)) {
    // loop until counter is 4
    while(counter < 4) {
      // validate the guess is equal to the secret num
      if (Number(userGuess) === secretNum) {
      // if user guess corectly alert and end loop
        alert('Yes, you guessed correctly.  Good Job!');
        break;
      }

      // if the guess is too high, prompt alert
      else if (Number(userGuess) > secretNum) {
        alert('Your guess is too high!');
        console.log('You guessed: ' + userGuess);
        counter++;
      }
      // if user guess is too low, prompt alert
      else if (Number(userGuess) < secretNum) {
        alert('Your guess is too low!');
        console.log('You guessed: ' + userGuess);
        counter++;
      }
      // icrement the counter
      // counter++;
      // Prompt user for another guess
      userGuess = prompt('Guess again, please enter a valid number');
    }

    // end after 4 gusses
    if (counter === 4) {
      alert('Sorry! You have used up all your guesses.');
      alert('The secert number is ' + secretNum);
    }
    // if the user guess is not a number, prompt alert
    else {
      alert('Please enter a number!');
    }
  }
  // if the user guess is empty, prompt alert
  else {
    alert('Please enter a guess!');

  }
}


// 7th question for loop with arrays
// Secert Answers
const stocks = ['Microsoft', 'General Electric', 'NTT Docomo', 'Cisco', 'Walmart', 'Intel', 'Nippon Telegraph', 'Nokia', 'Pfizer', 'Deutsche Telekom'];

// Counter to track # of guesses
let counter2 = 0;

// prompt user for guess
alert('Now, let\'s test your knowledge of Stocks in the year 2000');

let stockGuess= prompt('Can you name any of the Top 10 Largest Companies by Market Cap at the start of 2000? I\'ll give you 6 attempts');
console.log('You guessed: ' + stockGuess);

// Give user 6 attempts
const userAttempts = 6;


while (userAttempts > 0){
  if (stocks.includes(stockGuess)){
    alert('Congrats! You guessed correctly.');
    break;
  } else {
    userAttempts--;
    alert(`Incorrect answer. You have ${userAttempts} attempts left.`);
      userAnswer = prompt('Guess again?');
  }
}

if (userAttempts === 0){
  alert('You have no more attempts left. The correct answers are' + stocks);
}


// Goodbye message
alert('Thank you for vising, ' + userName + '.  See you next time.');
