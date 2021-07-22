// An array that contains the colours of the buttons
buttonColours = ["red", "blue", "green", "yellow"];

// Empty arrays
gamePattern = [];
userClickedPattern = [];

var gameStarted = false;
var level = 0;

// When a key is pressed run the function
$(document).keydown(function () {
  // if gameStarted === false
  if (!gameStarted) {
    // Change the text of the element with #level-title id to "Level " + level
    $("#level-title").text("Level " + level);

    // Start the game
    nextSequence();
    gameStarted = true;
  }
});

// Function that generates a random number
function randomNumberGenerator() {
  var randomNumber = Math.floor(Math.random() * 4);

  return randomNumber;
}

// Function that selects the id attached to the parameter
function selectColourID(randomColour) {
  var selectedColour = $("#" + randomColour);

  return selectedColour;
}

// Function that adds a flash animation to the parameter
function flashAnimation(element) {
  element.fadeOut(100).fadeIn(100);
}

// Detect which button is clicked and trigger a function
$(".btn").click(function () {
  // Select the id of the selected element
  var userChosenColour = $(this).attr("id");

  // Add the selected element to the userClickedPattern array
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userClickedPattern.length - 1);
});

// Function that verifies the values selected by the user with the game sequence
function checkAnswer(currentLevel) {
  // If the element the user selects is equal with the element at the same position from the gamePattern array
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    console.log("success");

    // If the 2 arrays have the same length --> a move has been made
    if (userClickedPattern.length === gamePattern.length) {
      // After 1s, run the nextSequence() again
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  } else {
    // Play the wrong.mp3 when a user clicks on a wrong button
    playSound("wrong");

    // Add and remove the .game-over CSS class to the body
    $("body").addClass("game-over");
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);

    // Change the h1 text to the following message
    $("#level-title").text("Game Over, Press Any Key to Restart");

    // When we answer wrong restart the game
    restartGame();
  }
}

// Function that runs the game
function nextSequence() {
  userClickedPattern = [];

  level++;
  $("#level-title").text("Level " + level);

  var randomNumber = randomNumberGenerator();
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  var randomColourId = selectColourID(randomChosenColour);
  flashAnimation(randomColourId);
  playSound(randomChosenColour);
}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentButton) {
  // Add the CSS class pressed
  $("#" + currentButton).addClass("pressed");

  // Remove the CSS class pressed after 100 milliseconds
  setTimeout(function () {
    $("#" + currentButton).removeClass("pressed");
  }, 100);
}

// Function that restarts the game
function restartGame() {
  level = 0;
  gamePattern = [];
  gameStarted = false;
}
