// An empty array
gamePattern = [];

userClickedPattern = [];

// An array that contains the colours of the buttons
buttonColours = ["red", "blue", "green", "yellow"];

// Function that runs the game
function nextSequence() {}

function randomNumberGenerator() {
  var randomNumber = Math.floor(Math.random() * 4);
  return randomNumber;
}

// Generate a random Number
randomNumber = randomNumberGenerator();

// Function that picks an element from the array from a specific index
function pickElementFromArray(array, index, count) {
  var arrElement = array.splice(index, count);

  return arrElement;
}

// Pick one random colour from the array (based on the randomly generated number)
randomChosenColour = pickElementFromArray(buttonColours, randomNumber, 1);

// Add the randomChosenColour to the end of gamePattern array
gamePattern.push(randomChosenColour);

function flashAnimation(element) {
  element.fadeOut(100).fadeIn(100);
}

// Select a button with the same id as the randomChosenColour
var selectedButton = $("#" + randomChosenColour);

// Add flash animation to the selected element
flashAnimation(selectedButton);

function playSound(colour) {
  var audio = new Audio("sounds/" + colour + ".mp3");
  audio.play();
}

playSound(randomChosenColour);

// Detect which button is clicked and trigger a function
$(".btn").on("click", function () {
  // Select the id attribute of the clicked button
  var userChosenColour = $(this).attr("id");

  playSound(userChosenColour);

  // add the current button's id to the userClickedPattern array
  userClickedPattern.push(userChosenColour);

  console.log(userClickedPattern);
});
