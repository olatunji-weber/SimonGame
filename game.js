//3. At the top of the game.js file, create a new array called buttonColours and set it to hold the sequence "red", "blue", "green", "yellow" .
var buttonColours = ["red", "blue", "green", "yellow"];

//5. At the top of the game.js file, create a new empty array called gamePattern.
var gamePattern = [];
var userClickedPattern = [];

function userSequence(x){
  // var userChosenColour = x;
  userClickedPattern.push(x);
  alert(userClickedPattern);
}

// var buttons = $(".btn"); //returns an array of the button objects
$(".btn").click(function(){
  userSequence( $(this).attr("id") );
});

//1. Inside game.js create a new function called nextSequence()
function nextSequence() {
  //2. Inside the new function generate a new random number between 0 and 3, and store it in a variable called randomNumber
  //4. Create a new variable called randomChosenColour and use the randomNumber from step 2 to select a random colour from the buttonColours array.
  var randomChosenColour = buttonColours[Math.floor(Math.random() * 4)];
  //6. Add the new randomChosenColour generated in step 4 to the end of the gamePattern.
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
  audio.play();
}

nextSequence();
