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
// console.log('Born in Thailand: ' + thailand);

//if user guess is correct
if (thailand === 'yes' || thailand === 'y') {
  alert('Yes, that\'s correct!');
} else {
  alert('Sorry that is incorrect.');
}

// 2nd question
// prompt 2nd question
let marines = prompt('Did I served in the Marine Corps? y/n or yes/no').toLowerCase();
// console.log('In the Marnes: ' + marines);

//if user guess is correct
if (marines === 'yes' || marines === 'y') {
  alert('Yes, that\'s correct! I did. Semper Fi.');
} else {
  alert('Sorry that is incorrect.');
}

// 3rd question
// prompt 3rd question
let psu = prompt('Did I go to Portland State University? y/n or yes/no').toLowerCase();
// console.log('Go to PSU: ' + psu);

//if user guess is correct
if (psu === 'yes' || psu === 'y') {
  alert('Yes, that\'s correct! I did. Go Vikings!');
} else {
  alert('Sorry that is incorrect.');
}

// 4th question
// prompt 4th question
let up = prompt('Did I go to University of Portland? y/n or yes/no').toLowerCase();
// console.log('Go to UP: ' + up);

//if user guess is correct
if (up === 'yes' || up === 'y') {
  alert('Yes, that\'s correct!');
} else {
  alert('Sorry that is incorrect.');
}

// 5th question
// prompt 5th question
let codefellow = prompt('Am I currently attending Code Fellows? y/n or yes/no').toLowerCase();
// console.log('Attending Code Fellows: ' + codefellow);

//if user guess is correct
if (codefellow === 'yes' || codefellow === 'y') {
  alert('Yes, I am!');
} else {
  alert('Sorry that is incorrect.');
}

// Goodbye message
alert('Thank you for vising, ' + userName + '.  See you next time.');
