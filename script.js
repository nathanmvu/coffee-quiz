var questionMain = document.querySelector("#questionMain");
var buttons = document.getElementsByClassName("btn-primary");
var button1 = document.querySelector("#button1");
var button2 = document.querySelector("#button2");
var button3 = document.querySelector("#button3");
var button4 = document.querySelector("#button4");

var startButton = document.querySelector("#startButton");
var highScoresButton = document.querySelector("#highScoresButton");
var alert = document.querySelector("#alert");

var questionNum = document.querySelector("#questionNumber");
var questionEl = document.querySelector("#questionPrompt");
var questionIndex = 0;

var resultText = document.querySelector("#resultText");

var hsText = document.querySelector("#hsText");

var highscores = document.querySelector("#highscores");
var submitButton = document.querySelector("#submit");

var back = document.querySelector("#back");
var clear = document.querySelector("#clear");

var score = 0;

var questionArray = ["Which of these is not an actual coffee brewing method?",
                      "What temperature water is best for brewing light-roasted coffee beans?",
                      "What is the typical coffee bean grind size for espresso brewing?",
                      "How much caffeine is in an average cup of coffee?"];

// Array of arrays of answer choices
var answersArray = [
                    { choices:["Aeropress", "Siphon", "French Press", "Z-Top"],
                      answer: "Z-Top" },
                    { choices: ["Boiling Hot", "Room Temperature", "Ice Cold", "Warm"],
                      answer: "Boiling Hot" },
                    { choices: ["Very Fine", "Fine", "Medium", "Coarse"],
                      answer: "Very Fine" },
                    { choices: ["50mg", "100mg", "150mg", "200mg"],
                      answer: "100mg" }
                    ];
var answerIndex = 0;

// Boolean for correct answer
var correct = false;

var finished = false;

var choice = "";

startButton.addEventListener("click", function() {
    console.log('start');
  startButton.hidden = true;
  questionMain.hidden = false;
  stopTimer();
  secondsElapsed = 0;
  startTimer();
});

highScoresButton.addEventListener("click", function() {
  startButton.hidden = true;
  finish.hidden = true;
  questionMain.hidden = true;
  highscores.hidden = false;
});

submitButton.addEventListener("click", function() {
  finish.hidden = true;
  questionMain.hidden = true;
  highscores.hidden = false;
  var initial = document.querySelector("#initial");
  hsText.innerHTML += initial.value + " " + score + "<br>";
});

back.addEventListener("click", function() {
  startButton.hidden = false;
  highscores.hidden = true;
  questionIndex = 0;
  answerIndex = 0;
  score = 0;
  questionChange();
  answerChange();
});

clear.addEventListener("click", function() {
  hsText.innerHTML = "";
});

// Button 1 Event Listener
button1.addEventListener("click", function() {
  choice = answersArray[answerIndex-1].choices[0];
  checkAnswer();
  questionChange();
  answerChange();
});

// Button 2 Event Listener
button2.addEventListener("click", function() {
  choice = answersArray[answerIndex-1].choices[1];
  checkAnswer();
  questionChange();
  answerChange();
});

// Button 3 Event Listener
button3.addEventListener("click", function() {
  choice = answersArray[answerIndex-1].choices[2];
  checkAnswer();
  questionChange();
  answerChange();
});

// Button 4 Event Listener
button4.addEventListener("click", function() {
  choice = answersArray[answerIndex-1].choices[3];
  checkAnswer();
  questionChange();
  answerChange();
});


// Function to change the question
function questionChange() {
  if(questionIndex < 4) {
    questionNum.innerHTML = "Question " + (questionIndex+1);
    questionEl.innerHTML = questionArray[questionIndex];
    questionIndex++;
  } else {
    checkEnd();
  }
};

// Function to give new answer choices
function answerChange() {
  if(answerIndex < 4) {
    for(var i = 0; i < 4; i++) {
      buttons[i].innerHTML = '';
      buttons[i].innerHTML = answersArray[answerIndex].choices[i];
    }
  answerIndex++;
  } 
};

function alertAnswer(status) {
  const alert = document.querySelector("#alert1");
  alert.textContent = status;
  setTimeout(function() {
    alert.textContent = "";
  }, 1000);
}

// Function to check answers
function checkAnswer() {
  if(choice == answersArray[answerIndex-1].answer) {
    alertAnswer('Correct');
    score += 20;
  } else {
    alertAnswer('Incorrect');
    secondsElapsed += 10;
    if (secondsElapsed > 60) {
      endQuiz();
    }
    if(score >= 8) {
      score -= 8;
    } else {
      score = 0;
    }
  }
};


var totalSeconds = 60;
var secondsElapsed = 0;
var interval;

var secondsDisplay = document.querySelector("#seconds");

function renderTime() {
  secondsDisplay.textContent = "Time: " + (Math.max(totalSeconds - secondsElapsed, 0)).toString();
}

function stopTimer() {
  secondsElapsed = 0;
  clearInterval(interval);
}

function startTimer() {
  interval = setInterval(function() {
    secondsElapsed++;
    renderTime();
    if (secondsElapsed == 60) {
      endQuiz();
    }
  }, 1000);
}

function checkEnd() { 
  if(questionIndex == 4) {
    endQuiz();
  } 
}

function endQuiz() {
  questionIndex = 0
  questionMain.hidden = true;
  var finish = document.querySelector("#finish");
  finish.hidden = false;
  resultText.innerHTML = "Your score was: " + score;
  stopTimer();
}

if(finished == false) {
  questionChange();
  answerChange();
}