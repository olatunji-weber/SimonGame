// $(document).click(function(){
//   $("h1").text("I love programming so much.");
//   $("h1").css("color","red");
// });
var buttonColours = ["red", "blue", "green", "yellow"];    //Crete an array of colours
var gamePattern = [];                                      //Create an empty array

// Create a function to generate random numbers between 0 and 3
function nextSequence(){
  var randomNumber = Math.floor(Math.random() * 4);
  return randomNumber;
}

// Choose a random colour from the array of colours
var randomChosenColour = buttonColours[nextSequence()];

// Create a pattern by pushing random colors to the array
gamePattern.push(randomChosenColour);
