function gameLoop() {
  //1. generate rendom number
  const alphabet = getRandomAlphabet();
  //set randomly generated alphabet to the screen
  const currentAlphabetElement = document.getElementById("current-alphabet");
  currentAlphabetElement.innerText = alphabet;
  //set background color
  setHighlightById(alphabet);
}

document.addEventListener("click", function (event) {
  if (event.target.classList.contains("play-btn")) {
    //hide everything
    hideElementById("home-screen");
    hideElementById("final-score");
    showElementById("play-ground");
    //reset score
    setTextElementValueById("current-life", 5);
    setTextElementValueById("current-score", 0);
    gameLoop();
  }
});
function gameOver() {
  hideElementById("play-ground");
  showElementById("final-score");
  //update final score
  //1. get your score
  const yourScore = getTextElementValueById("current-score");
  setTextElementValueById("your-score", yourScore);
  //clear the last selected alphabet highlight
  const currentAlphabet = getElementTextById('current-alphabet');
  removeHighlightById(currentAlphabet);
}
document.addEventListener("keyup", function (event) {
  const playerPressed = event.key;
  if(playerPressed === 'Escape'){
    gameOver();
  }
  //expected keypress
  const currentAlphabetElement = document.getElementById("current-alphabet");
  const currentAlphabet = currentAlphabetElement.innerText;
  const expectedAlphabet = currentAlphabet.toLowerCase();
  //check alphabet
  if (playerPressed === expectedAlphabet) {
    const currentScore = getTextElementValueById("current-score");
    const newScore = currentScore + 1;
    setTextElementValueById("current-score", newScore);
    //upadate score
    //1.get current score
    // const currentScoreElement = document.getElementById("current-score");
    // const currentScoreText = currentScoreElement.innerText;
    // const currentScore = parseInt(currentScoreText);

    //2. increasethe score by 1
    // const newScore = currentScore + 1;
    //3. show updated score
    // currentScoreElement.innerText = newScore;
    removeHighlightById(expectedAlphabet);
    gameLoop();
  } else {
    console.log("OPPS");
    const currentLife = getTextElementValueById("current-life");
    const newLife = currentLife - 1;
    setTextElementValueById("current-life", newLife);
    //1. get current life element
    // const currentLifeElement = document.getElementById("current-life");
    // const currentLifeText = currentLifeElement.innerText;
    // const currentLife = parseInt(currentLifeText);
    //2/ reduce the life
    // const reductedLife = currentLife - 1;
    //display the updated life count
    // currentLifeElement.innerText = reductedLife;
    if (newLife === 0) {
      gameOver();
    }
  }
});
