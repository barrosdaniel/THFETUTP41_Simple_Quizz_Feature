var questionsRightCount = 0;
var questionsRight = [];
var questionsWrong = [];
var questions = [
  ['What is the largest island in the world?', 'australia'],
  ['What is the capital of Australia?', 'canberra'],
  ['What is the largest city in Australia?', 'sydney'],
  ['In which year was Australia discovered?', '1788'],
  ['In which year was Australia founded?', '1901'],
]

function print(message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}

function buildList(array) {
  var listHTML = '<ol>';
  for (var i = 0; i < array.length; i++) {
    listHTML += '<li>' + array[i] + '</li>';
  }
  listHTML += '</ol>';
  return listHTML;
}

alert('Are you ready to start the quizz? Press OK to start! To exit type quit.');

for (var i = 0; i < questions.length; i++) {
  var playerAnswer = prompt(questions[i][0]).toLowerCase();
  console.log(playerAnswer); //DELETE
  if (playerAnswer === 'quit') {
    break
  } else if (playerAnswer === questions[i][1]) {
    alert('Correct.');
    questionsRightCount++;
    questionsRight.push(questions[i][0]);
  } else {
    alert('Incorrect. The answer is ' + questions[i][1].charAt(0).toUpperCase() + questions[i][1].slice(1) + '.');
    questionsWrong.push(questions[i][0]);
  }
}

var message = '<p>You got ' + questionsRightCount + ' question(s) right.</p>';

message += '<h2> You got these questions correct:</h2>';
message += buildList(questionsRight);

message += '<h2> You got these questions wrong:</h2>';
message += buildList(questionsWrong);

print(message);