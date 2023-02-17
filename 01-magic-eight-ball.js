/*

Project name: Magic Eight Ball

In this project we will build a Magic Eight Ball using control flow in JavaScript. 
The user will be able to input a question, then our program will output a random fortune.

Key notes:
  -> Template literals must use ` (backtick) -- e.g. for string interpolation
  -> Switch cases (don't forget to break out of the switch block) ... otherwise the next 
     code block in the switch statement is executed
  -> default keyword specifies some code to run if there is no case match.

*/

let userName = 'mightBeDave';

userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!'); 

const userQuestion = 'is my code sus?';

console.log(userQuestion)

const randomNumber = Math.floor(Math.random()*8);

let eightBall = '';

switch (randomNumber) {
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidedly so';
    break;
  case 2:
    eightBall = 'Reply hazy try again';
    break;
  case 3:
    eightBall = 'Cannot predict now';
    break;
  case 4:
    eightBall = 'Do not count on it';
    break;
  case 5:
    eightBall = 'My sources say no';
    break;
  case 6:
    eightBall = 'Outlook not so good';
    break;
  case 7:
    eightBall = 'Signs point to yes';
    break;
}

console.log(eightBall)
