var buttons = document.getElementsByClassName("btn");
var button1 = document.querySelector("#button1");
var button2 = document.querySelector("#button2");
var button3 = document.querySelector("#button3");
var button4 = document.querySelector("#button4");

var questionNum = document.querySelector("#questionNumber");
var questionEl = document.querySelector("#questionPrompt");
var questionIndex = 1;

var choice1 = 0;
var choice2 = 0;
var choice3 = 0;
var choice4 = 0;

var questionArray = ["Which of these is not an actual coffee brewing method?",
                      "What temperature water is best for brewing light-roasted coffee beans?",
                      "What is the typical coffee bean grind size for espresso brewing?",
                      "How much caffeine is in an average cup of coffee?"];
var answersArray = [["Aeropress", "Siphon", "French Press", "zzz"],
                    ["Boiling Hot", "Room Temperature", "Ice Cold", "zzz"],
                    ["Very Fine", "Fine", "Medium", "Coarse"],
                    ["50mg", "100mg", "150mg", "200mg"]];

var answerIndex = 1;
// Fill up initial screen choices
for(var i = 0;i < 4 ; i++) {
  buttons[i].innerHTML = '';
  buttons[i].innerHTML = answersArray[0][i];
}

// Button 1 Event Listener
button1.addEventListener("click", function() {
  endQuiz();
  choice1++;
  questionIndex++;
  questionNum.innerHTML = "Question " + questionIndex;
  questionEl.innerHTML = questionArray[questionIndex-2];
  for(var i = 0; i < 4; i++) {
    buttons[i].innerHTML = '';
    buttons[i].innerHTML = answersArray[answerIndex][i];;
  }
  answerIndex++;
});

// Button 2 Event Listener
button2.addEventListener("click", function() {
  endQuiz();
  choice2++;
  questionIndex++;
  questionNum.innerHTML = "Question " + questionIndex;
  questionEl.innerHTML = questionArray[questionIndex-2];
  for(var i = 0; i < 4; i++) {
    buttons[i].innerHTML = '';
    buttons[i].innerHTML = answersArray[answerIndex][i];
  }
  answerIndex++;
});

// Button 3 Event Listener
button3.addEventListener("click", function() {
  endQuiz();
  choice3++;
  questionIndex++;
  questionNum.innerHTML = "Question " + questionIndex;
  questionEl.innerHTML = questionArray[questionIndex-2];
  for(var i = 0; i < 4; i++) {
    buttons[i].innerHTML = '';
    buttons[i].innerHTML = answersArray[answerIndex][i];
  }
  answerIndex++;
});

// Button 4 Event Listener
button4.addEventListener("click", function() {
  endQuiz();
  choice4++;
  questionIndex++;
  questionNum.innerHTML = "Question " + questionIndex;
  questionEl.innerHTML = questionArray[questionIndex-2];
  for(var i = 0; i < 4; i++) {
    buttons[i].innerHTML = '';
    buttons[i].innerHTML = answersArray[answerIndex][i];
  }
  answerIndex++;
});

var totalSeconds = 60;
var secondsElapsed = 0;
var interval;

var secondsDisplay = document.querySelector("#seconds");

function renderTime() {
  secondsDisplay.textContent = "Time: " + (totalSeconds - secondsElapsed).toString();
  if(secondsElapsed == 60) {
    alert("Time's Up!");
    stopTimer();
  }
}

function stopTimer() {
  secondsElapsed = 0;
  clearInterval(interval);
}

function startTimer() {
  interval = setInterval(function() {
    secondsElapsed++;
    renderTime();
  }, 1000);
}

function endQuiz() {
  if(questionIndex == 2) {
    return;
  }
}

startTimer();