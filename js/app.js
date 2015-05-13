
$(document).ready(function(){
	
	//Function to compare between numbers
	function between(x, min, max) {
		return x >= min && x <= max;
	}

	//Generate random number
	var randomInt = Math.floor((Math.random()*100)+1);

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	//New Game button
  	$("a.new").click(function(e) {
  		e.preventDefault();
  		randomInt = Math.floor((Math.random()*100)+1);

  		$("#feedback").text("Make your guess!");
  		$("#count").text(0);
  		$("#guessList").html(" ");
  		$("#userGuess").val(" ");
})

	//Guess button on click
	$("#guessButton").click(function(e) {
		e.preventDefault();

		//SAVE USER INPUT TO VAR
		var value = parseInt($("#userGuess").val());
		$("#userGuess").val(" ");

		//VALIDATE NUMBER
		if (isNaN(value)) {
			$("#feedback").text("Please enter a valid number");
			return;

		}
		//VALIDATE OVER 100
		if(value > 100) {
			$("#feedback").text("Please enter a number less than 100");
			return;
		}
		//VALIDATE LESS THAN 0
		if(value < 0) {
			$("#feedback").text("Please enter a number greater than 0");
			return;
		}
		//INCREMENT GUESS COUNT
		$("#count").text((parseInt($("#count").text() ) +1));

		//ADD TO GUESS LIST
		$("#guessList").append("<li>" + userGuess + "</li>");
		
		//VALIDATE ANSWER
		if(value === randomInt) {
			$("#feedback").text("You got it!, It's " + value);
			return;
		}
		//VALIDATE RANGE OF 5
		if(between(value, (randomInt - 5), (randomInt + 5))){
			$("#feedback").text("You are on fire!");
			return;
		}
		//VALIDATE RANGE OF 10
		if(between(value, (randomInt - 10), (randomInt + 10))){
			$("#feedback").text("You are getting hotter!");
			return;
		}
		//VALIDATE RANGE OF 20
		if(between(value, (randomInt - 20), (randomInt + 20))){
			$("#feedback").text("You are getting warmer!");
			return;
		}
		//VALIDATE RANGE OF 30
		if(between(value, (randomInt - 30), (randomInt + 30))){
			$("#feedback").text("You are cold!");
			return;
		}
		//VALIDATE RANGE OF 30+
		$("#feedback").text("You are freezing!");
		return;
		});

	});


