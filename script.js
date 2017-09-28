var answerBox = document.querySelector('.input-field');
var number = document.querySelector('.number');
var guessButton = document.querySelector('.guess-button');
var clearButton = document.querySelector('.clear-button');
var resetButton = document.querySelector('.reset-button');
var clue = document.querySelector('.clue')
var randomNumber = Math.floor(Math.random() * 10) + 1;
var counter = 0;
// var allButtons = guessButton + clearButton + resetButton;

console.log(randomNumber);

guessButton.addEventListener('click', guess);
clearButton.addEventListener('click', clear);
answerBox.addEventListener('input', function(){
  enable();
  enableResetButton();
});
resetButton.addEventListener('click',function() {
  window.location.reload()
});

function guess() {
  var answer = parseInt(answerBox.value);
  counter++;
  if (answer > randomNumber){
    clue.innerText = 'That is too high'
  } if (answer < randomNumber){
    clue.innerText = 'That is too low'
  } if (answer === randomNumber){
    clue.innerText = 'BOOM! ' + 'It only took you ' + counter + ' tries to get it rigth.';
  }

  number.innerText = answer;

  clear();
  enable();

  if (counter > 10){
    answerBox.disabled = true
    guessButton.disabled = true;
    clearButton.disabled = true;
    clue.innerText = 'You were not able to guess ' + randomNumber + '.';
  }
}

function clear() {
  answerBox.value = '';
  answerBox.focus()
}

function enable() {
  if (answerBox.value === ''){
    // allButtons.disabled = true;
    guessButton.disabled = true;
    clearButton.disabled = true;
  } else {
    // allButtons.disabled = false;
   guessButton.disabled = false;
   clearButton.disabled = false;
  }
}

function enableResetButton() {
  if (answerBox.value === ''){
    resetButton.disabled = true;
  } else {
   resetButton.disabled = false;
  }
}
