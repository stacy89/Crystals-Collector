$(document).ready(function() {
	gameSetup();
	beginGame();
	scoreCounter();
});

var randomNum;
var randCrystalNum;
var crystalImgs = ["assets/images/blue.png", "assets/images/pink.png", "assets/images/purple.png", "assets/images/red.png"];
var wins = 0;
var losses = 0;
var score = 0; 

var gameSetup = function() {
	$("#score").append("<div class='score'> Score: " + score + "</div>");
 	$("#score").append("<div class='wins'> Wins: " + wins + "</div>");
 	$("#score").append("<div class='losses'> Losses: " + losses + "</div>");
};

var beginGame = function() {
	randomNum = Math.floor(Math.random() * (120 - 12) + 12)
	
	randCrystalNum = Math.floor(Math.random() * (12 - 1) + 1)
	
	$("#randomNum").html(randomNum);


	for (i = 0; i < crystalImgs.length; i++) {
		$("#jewels").append("<img class='crystalImg' src='" + crystalImgs[i] + "'>");
		
		$(".crystalImg").attr("data-img-num", randCrystalNum);
	}
};

var scoreCounter = function() {
	$(".crystalImg").on("click", function() {

		var crystalVal = parseInt($(this).attr("data-img-num"));

		score += crystalVal

 		$(".score").html("Score: " + score);

 		if (score === randomNum) {
 			wins++
 		$(".wins").html("Win: " + wins);
 			beginGame();
 		} 
 		else if (score > randomNum) {
 			losses++
 		$(".losses").html("Losses: " + losses);
 			beginGame();
 		}
 	});	
};
















