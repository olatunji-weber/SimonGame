//3. At the top of the game.js file, create a new array called buttonColours and set it to hold the sequence "red", "blue", "green", "yellow" .
var buttonColours = ["red", "blue", "green", "yellow"];
var level = 0;
var gamePattern = [];
var userClickedPattern = [];
var started = false;

$(document).keypress(function(e){
  if (started === false){
    $("h1").text("Level " + level);
    nextSequence();
    started = true;
  }
});

// var buttons = $(".btn"); //returns an array of the button objects
$(".btn").click(function(){
  var currentColour = $(this).attr("id");
  playSound(currentColour);
  userClickedPattern.push(currentColour);
  animatePress(currentColour);
  level += 1;
  $("h1").text("Level " + level);
  checkAnswer(userClickedPattern.length - 1);
});

function checkAnswer(currentLevel){

  if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){
    if(userClickedPattern.length === gamePattern.length){
        setTimeout(function(){
          nextSequence();
        }, 1000);
    }
  }else{
    playSound("wrong");
    setTimeout( function(){ $("body").addClass("game-over");}, 200 );
    $("h1").text("Game Over, Press Any Key to Restart");
    startOver()
    nextSequence();
  }
}

function nextSequence() {   //1. Inside game.js create a new function called nextSequence()
  $("h1").text("Level " + level);
  userClickedPattern = [];
  level += 1;
  $("h1").text("Level " + level);
  //2. Inside the new function generate a new random number between 0 and 3, and store it in a variable called randomNumber
  //4. Create a new variable called randomChosenColour and use the randomNumber from step 2 to select a random colour from the buttonColours array.
  var randomChosenColour = buttonColours[Math.floor(Math.random() * 4)];
  //6. Add the new randomChosenColour generated in step 4 to the end of the gamePattern.
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
  // started = true;
}

// This fucntion is to play a sound from the sound folder based on the colour that is passed as "name"
function playSound(name){
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColour){
  $("#"+ currentColour).addClass("pressed");

  setTimeout(function () {
    $("#" + currentColour).removeClass("pressed");
  }, 100);
}

function startOver(){
  level = 0;
  gamePattern = [];
  started = false;
}
