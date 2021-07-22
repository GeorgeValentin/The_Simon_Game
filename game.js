// An empty array
gamePattern = [];

userClickedPattern = [];

// An array that contains the colours of the buttons
buttonColours = ["red", "blue", "green", "yellow"];

// Function that generates a random number between 0 and 3
function nextSequence() {
  randomNumber = Math.floor(Math.random() * 4);

  return randomNumber;
}

// Generate a random numnber
randomNumber = nextSequence();

// Function that picks an element from the array from a specific index
function pickElementFromArray(array, index, count) {
  var arrElement = array.splice(index, count);

  return arrElement;
}

// Pick one random colour from the array (based on the randomly generated number)
randomChosenColour = pickElementFromArray(buttonColours, randomNumber, 1);

// Add the randomChosenColour to the end of gamePattern array
gamePattern.push(randomChosenColour);

console.log(gamePattern);

console.log(randomChosenColour);
