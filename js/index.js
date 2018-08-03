'use strict';

var buttonRock = document.getElementById('rock');
var buttonPaper = document.getElementById('paper');
var buttonScissor = document.getElementById('scissor');


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
  params.progress = [];

  params.playerScoreInner = document.getElementById('playerPick');
  params.computerScoreInner = document.getElementById('comPick');

  params.output = document.getElementById('output');
  params.roundsTotal = document.getElementById('roundsTotal');
 

 var buttonNewGame= document.getElementById('newGame');

buttonNewGame.addEventListener('click', function(){
  params.newGame = window.prompt('State numer of wins');
  roundsTotal.innerHTML = '<br>' + 'Aby wygrać musisz zdobyć ' + params.newGame + ' punktów';
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
  
  var comChoice = comMove();
  
  if(params.endGame == false) {
  
  if (moveName == 'rock' && comChoice == 1) {
    params.output.innerHTML ='YOU LOSE your choice was rock Computer chose Paper!';
    params.computerScore++;
    updateScore();
  }
  if (moveName == 'rock' && comChoice == 2) {
    params.output.innerHTML ='ITs a TIE!';
  }
  if (moveName == 'rock' && comChoice == 3) {
    params.output.innerHTML ='YOU WIN you chose Rock Computer chose Scissors!';
    params.playerScore++;
    updateScore();
  }
  if (moveName == 'paper' && comChoice == 1) {
    params.output.innerHTML ='ITs a TIE!';
  }
  if (moveName == 'paper' && comChoice == 2) {
    params.output.innerHTML ='YOU WIN you chose Paper Computer chose Rock!';
    params.playerScore++;
    updateScore();
  }
  if (moveName == 'paper' && comChoice == 3) {
    params.output.innerHTML ='YOU LOSE your choice was Paper Computer chose Scissors!';
    params.computerScore++;
    updateScore();
  }
  if (moveName == 'scissor' && comChoice == 1) {
    params.output.innerHTML ='YOU WIN you chose Scissors Computer chose Paper!';
    params.playerScore++;
    updateScore();
  }
  if (moveName == 'scissor' && comChoice == 2) {
    params.output.innerHTML ='YOU LOSE your choice was Scissors Computer chose Rock!';
    params.computerScore++;
    updateScore();
  }
  if (moveName == 'scissor' && comChoice == 3) {
    params.output.innerHTML ='ITs a TIE!';
  }
  else {
    params.output.innerHTML ='Koniec gry';
   }
  }
 
  }

function updateScore(){
  if(params.playerScore >= params.newGame || params.computerScore >= params.newGame){
    params.endGame = true;
    document.querySelector('#modal-overlay').classList.add('show');
  }
  params.playerScoreInner.innerHTML = params.playerScore;
  params.computerScoreInner.innerHTML = params.computerScore;
}
var hideModal = function(event){
  event.preventDefault();
  document.querySelector('#modal-overlay').classList.remove('show');
};
document.querySelector('#modal-overlay').addEventListener('click', hideModal);