// An array that contains the colours of the buttons
buttonColours = ["red", "blue", "green", "yellow"];

// Empty arrays
gamePattern = [];
userClickedPattern = [];

var gameStarted = false;
var level = 0;

$(document).keydown(function () {
  if (!gameStarted) {
    $("#level-title").text("Level " + level);
    nextSequence();
    gameStarted = true;
  }
});

function randomNumberGenerator() {
  var randomNumber = Math.floor(Math.random() * 4);

  return randomNumber;
}

function selectColourID(randomColour) {
  var selectedColour = $("#" + randomColour);

  return selectedColour;
}

function flashAnimation(element) {
  element.fadeOut(100).fadeIn(100);
}

function determineClickedButton() {
  var clickedButton = $(".btn").on("click", function () {
    $(this).attr("id");
  });

  return clickedButton;
}

// Detect which button is clicked and trigger a function
$(".btn").click(function () {
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);

  checkAnswer(userClickedPattern.length - 1);
});

function checkAnswer(currentLevel) {
  console.log(gamePattern[currentLevel]);
  console.log(userClickedPattern[currentLevel]);
  if (gamePattern[currentLevel] == userClickedPattern[currentLevel]) {
    console.log("success");

    if (userClickedPattern.length == gamePattern.length) {
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  } else {
    console.log("wrong");
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
