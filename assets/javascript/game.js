// document.ready(function() {

// });

var randomNum;
var randCrystalNum;
var wins = 0;
var losses = 0;
var score = 0; 

var beginGame = function() {
	randomNum = Math.floor(Math.random() * (120 - 12) + 12)
	console.log(randomNum);
};

beginGame();