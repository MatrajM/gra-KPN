'use strict';

var buttonRock = document.getElementById('rock');
var buttonPaper = document.getElementById('paper');
var buttonScissor = document.getElementById('scissor');

/*
var playerChoice = document.querySelectorAll('.player-move');
	for(var i = 0; i < playerChoice.length; i++){
		function gameButtons (){
      var b = document.getAttribute("data-move");
      var rock = playerMove(b[0]);
      var paper = playerMove(b[1]);
      var scissor = playerMove(b[2]);
    }
  };
  
  var params = new Object();
  params.playerScore = 0;
  params.computerScore = 0;
  params.newGame = 0;
  params.endGame = false;

  params.playerScoreInner = document.getElementById('playerPick');
  params.computerScoreInner = document.getElementById('comPick');

  params.output = document.getElementById('output');
  params.roundsTotal = document.getElementById('roundsTotal');
 */

 var buttonNewGame= document.getElementById('newGame');

var playerScore = 0;
var computerScore = 0;
var newGame = 0;
var endGame = false;

var playerScoreInner = document.getElementById('playerPick');
var computerScoreInner = document.getElementById('comPick');

playerScoreInner.innerHTML='Player Score';
computerScoreInner.innerHTML='Computer Score';

var output = document.getElementById('output');
output.innerHTML = 'GAME RESULTS' + '<br><br>';

var roundsTotal = document.getElementById('roundsTotal');

buttonNewGame.addEventListener('click', function(){
  newGame = window.prompt('State numer of wins');
  roundsTotal.innerHTML = '<br>' + 'Aby wygrać musisz zdobyć ' + newGame + ' punktów';
});
buttonPaper.addEventListener('click', function(){
  playerMove('paper');
}); 
buttonRock.addEventListener('click', function(){
  playerMove('rock');
}); 
buttonScissor.addEventListener('click', function(){
  playerMove('scissor');
}); 

 function comMove (){
   var num =  Math.floor((Math.random() * 3) + 1); 
   return num;
 }

function playerMove (moveName){
  var output = document.getElementById('output');
 
  var comChoice = comMove();
  
  if(endGame == false) {
  
  if (moveName == 'rock' && comChoice == 1) {
    output.innerHTML ='YOU LOSE your choice was rock Computer chose Paper!';
    computerScore++;
    updateScore();
  }
  if (moveName == 'rock' && comChoice == 2) {
    output.innerHTML ='ITs a TIE!';
  }
  if (moveName == 'rock' && comChoice == 3) {
    output.innerHTML ='YOU WIN you chose Rock Computer chose Scissors!';
    playerScore++;
    updateScore();
  }
  if (moveName == 'paper' && comChoice == 1) {
    output.innerHTML ='ITs a TIE!';
  }
  if (moveName == 'paper' && comChoice == 2) {
    output.innerHTML ='YOU WIN you chose Paper Computer chose Rock!';
    playerScore++;
    updateScore();
  }
  if (moveName == 'paper' && comChoice == 3) {
    output.innerHTML ='YOU LOSE your choice was Paper Computer chose Scissors!';
    computerScore++;
    updateScore();
  }
  if (moveName == 'scissor' && comChoice == 1) {
    output.innerHTML ='YOU WIN you chose Scissors Computer chose Paper!';
    playerScore++;
    updateScore();
  }
  if (moveName == 'scissor' && comChoice == 2) {
    output.innerHTML ='YOU LOSE your choice was Scissors Computer chose Rock!';
    computerScore++;
    updateScore();
  }
  if (moveName == 'scissor' && comChoice == 3) {
    output.innerHTML ='ITs a TIE!';
  }
  }
  else {
    output.innerHTML ='Koniec gry';
   }
  }
function updateScore(){
  if(playerScore >= newGame || computerScore >= newGame){
    alert('koniec');
    endGame = true;
  }
  playerScoreInner.innerHTML = playerScore;
  computerScoreInner.innerHTML = computerScore;
}