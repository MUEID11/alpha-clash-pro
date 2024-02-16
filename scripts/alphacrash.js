function gameLoop() {
  //1. generate rendom number
  const alphabet = getRandomAlphabet();
  //set randomly generated alphabet to the screen
  const currentAlphabetElement = document.getElementById("current-alphabet");
  currentAlphabetElement.innerText = alphabet;
  //set background color
  setHighlightById(alphabet);
}

const playButton = document.getElementById("play-btn");
playButton.addEventListener("click", function () {
  hideElementById("home-screen");
  showElementById("play-ground");
  gameLoop();
});
document.addEventListener("keyup", function (event) {
  const playerPressed = event.key;
  //expected keypress
  const currentAlphabetElement = document.getElementById("current-alphabet");
  const currentAlphabet = currentAlphabetElement.innerText;
  const expectedAlphabet = currentAlphabet.toLowerCase();
  //check alphabet
  if (playerPressed === expectedAlphabet) {
    //upadate score
    //1.get current score
    const currentScoreElement = document.getElementById("current-score");
    const currentScoreText = currentScoreElement.innerText;
    const currentScore = parseInt(currentScoreText);
    //2. increasethe score by 1
    const newScore = currentScore + 1;
    //3. show updated score
    currentScoreElement.innerText = newScore;
    removeHighlightById(expectedAlphabet);
    gameLoop();
  } else {
    console.log("OPPS");
  }
});
