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
	console.log("being game!");
	$("#score").append("<div class='score'> Score: " + score + "</div>");
 	$("#score").append("<div class='wins'> Wins: " + wins + "</div>");
 	$("#score").append("<div class='losses'> Losses: " + losses + "</div>");

 	for (i = 0; i < crystalImgs.length; i++) {
		$("#jewels").append("<img class='crystalImg' src='" + crystalImgs[i] + "'>");
	}
};

var beginGame = function() {
 	score = 0;
 	$(".score").html("Score: " + score);
 	console.log(score);

	randomNum = Math.floor(Math.random() * (120 - 12) + 12)
	
	
	$("#randomNum").html(randomNum);

	var images = $(".crystalImg")

	for (i = 0; i < images.length; i++) {
	randCrystalNum = Math.floor(Math.random() * (12 - 1) + 1);

		$(images[i]).attr("data-img-num", randCrystalNum);
		console.log(images[i]);
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
















