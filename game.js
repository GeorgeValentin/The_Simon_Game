// An empty array
gamePattern = [];

userClickedPattern = [];

// An array that contains the colours of the buttons
buttonColours = ["red", "blue", "green", "yellow"];

function randomNumberGenerator() {
  var randomNumber = Math.floor(Math.random() * 4);
  return randomNumber;
}

// Function that picks an element from the array from a specific index
function pickElementFromArray(array, index, count) {
  var arrElement = array.splice(index, count);

  return arrElement;
}

function flashAnimation(element) {
  element.fadeOut(100).fadeIn(100);
}

function playSound(colour) {
  var audio = new Audio("sounds/" + colour + ".mp3");
  audio.play();
}

function determineClickedButton() {
  var clickedButton = $(".btn").on("click", function () {
    $(this).attr("id");
  });

  return clickedButton;
}

function animatePress(currentButton) {
  // Add the CSS class pressed
  $(currentButton).addClass("pressed");

  // Remove the CSS class pressed after 100 milliseconds
  setTimeout(function () {
    $(currentButton).removeClass("pressed");
  }, 100);
}

// Function that runs the game
function playGame() {
  // Generate a random Number
  randomNumber = randomNumberGenerator();

  // Pick one random colour from the array (based on the randomly generated number)
  randomChosenColour = pickElementFromArray(buttonColours, randomNumber, 1);

  // Add the randomChosenColour to the end of gamePattern array
  gamePattern.push(randomChosenColour);

  // Select a button with the same id as the randomChosenColour
  var randomSelectedButton = $("#" + randomChosenColour);

  // Add flash animation to the selected element
  flashAnimation(randomSelectedButton);

  // Play sound for the randomly selected button
  playSound(randomChosenColour);

  // Detect which button is clicked and trigger a function
  $(".btn").on("click", function () {
    var userChosenColour = $(this).attr("id");

    playSound(userChosenColour);

    // add the current button's id to the userClickedPattern array
    userClickedPattern.push(userChosenColour);

    animatePress(this);
  });
}

playGame();
