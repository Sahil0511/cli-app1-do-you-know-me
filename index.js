var readlineSync = require("readline-sync");

var score=0;

const chalk = require('chalk');

console.log(chalk.magenta("WELCOME TO THE QUIZ OF DO YOU KNOW SAHIL"));

var userName = readlineSync.question("GIVE ME YOUR NAME==> ");
 
console.log(chalk.blue("Hello "+ userName.toUpperCase()));

console.log(chalk.bold("Let's begin with the questions about me"))

console.log("----------------------------------------");

function play(question, answer){
  var userAnswer = readlineSync.question(question);

 if (userAnswer === answer) {
  console.log(chalk.bold.green("You are right!"));
  score = score +1;
  } else{
  console.log(chalk.bold.red("You are wrong!"));
  }
  console.log("Your score is " +score);
  console.log("---------------------------------")
}

var questions = [{
  question: "Q1.What's my favourite colour?\n1. Blue\n2. Black\n3. Red\n4. Green\n ",
  answer: "2",
}, {
  question: "Q2.Who's my favourite superhero?\n1. Ironman\n2. Thor\n3. Spiderman\n4. Hulk\n ",
  answer: "1",
}, {
  question: "Q3.What's my bday month?\n1. January\n2. February\n3. November\n4. December\n ",
  answer: "3",
},  {
  question: "Q4.What type of person I am?\n1. Nightowl\n2. Earlybird\n ",
  answer: "1",
},  {
  question: "Q5.What would I prefer more?\n1. Coffee\n2. Tea\n ",
  answer: "1",
},];

for (var i=0; i<questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer);
}


console.log("BRAVO! You SCORED: ", +score);