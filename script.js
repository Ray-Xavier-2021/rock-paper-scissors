/*
  Rock Paper Scissors 🚀🔥
  Concepts covered in this project
    👉 For loops
    👉 Dom Manipulation
    👉 Variables
    👉 Conditionals (if else if)
    👉 Template Literals
    👉 Event Listeners
    👉 Higher order Function (Math.random())
*/

// Track Scores
const totalScore = {computerScore: 0, playerScore: 0}

// ** getComputerChoice randomly selects between `rock` `paper` `scissors` and returns that string **
// getComputerChoice() 👉 'Rock'
// getComputerChoice() 👉 'Scissors'
function getComputerChoice() {
  let rpsChoices = ['Rock', 'Paper', 'Scissors']
  let randomChoice = Math.floor(Math.random() * rpsChoices.length)
  return rpsChoices[randomChoice]
}


// ** getResult compares playerChoice & computerChoice and returns the score accordingly **
// human wins - getResult('Rock', 'Scissors') 👉 1
// human loses - getResult('Scissors', 'Rock') 👉 -1
// human draws - getResult('Rock', 'Rock') 👉 0
function getResult(playerChoice, computerChoice) {
  // return the result of score based on if you won, drew, or lost
  let score  
  
  // All situations where human draws, set `score` to 0
  if (playerChoice == computerChoice) {
    score = 0
  }

  // All situations where human wins, set `score` to 1
  // make sure to use else ifs here
  else if (playerChoice == 'Rock' && computerChoice == 'Scissors') {
    score = 1
  } else if (playerChoice == 'Paper' && computerChoice == 'Rock') {
    score = 1
  } else if (playerChoice == 'Scissors' && computerChoice == 'Paper') {
    score = 1
  } 
  // Comparison /Tenarary Operators
  // else if (playerChoice == 'Rock' && computerChoice == 'Scissors' 
  //          || playerChoice == 'Paper' && computerChoice == 'Rock' 
  //          || playerChoice == 'Scissors' && computerChoice == 'Paper') {
  //   score = 1
  // }

  // Otherwise human loses (aka set score to -1)
  else {
    score = -1
  }
  
  // return score
  return score
}


// ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**
function showResult(score, playerChoice, computerChoice) {
  // Don't forget to grab the div with the 'result' id!
  const resultDiv = document.getElementById('result')
  // player hand VS computer hand
  const handsDiv = document.getElementById('hands')
  // player score
  const playerScoreDiv = document.getElementById('player-score')
  
  // Hint: on a score of -1
  // You should do result.innerText = 'You Lose!'
  if (score == -1) {
    resultDiv.innerText = 'You Lose'
  } else if (score == 0) {
    resultDiv.innerText = "It's a Tie!"
  }else {
    resultDiv.innerText = 'You Won!'
  }

  // update hands div
  handsDiv.innerText = `👱 ${playerChoice} vs 🤖 ${computerChoice}`
  // set div to player's score
  playerScoreDiv.innerText = `Your Score: ${totalScore['playerScore']}`
  
}

// ** Calculate who won and show it on the screen **
function onClickRPS(playerChoice) {
  // log player choice
  console.log({playerChoice}) 
  // set computer choice to getComputerChoice function
  const computerChoice = getComputerChoice()
  // log computer choice
  console.log({computerChoice})  

  // set score to getResult function with both arguments
  const score = getResult(playerChoice, computerChoice)

  // Track scores
  totalScore['playerScore'] += score
  // totalScore['computerScore'] += score
  console.log({score})
  console.log(totalScore)

  // Show results in DOM
  showResult(score, playerChoice, computerChoice) 
}


// ** Make the RPS buttons actively listen for a click and do something once a click is detected **
function playGame() {
  // use querySelector to select all RPS Buttons
  const rpsButtons = document.querySelectorAll('.rpsButton')
  // rpsButtons[0].onclick = () => console.log(rpsButtons[0].value)
  
  // * Adds an on click event listener to each RPS button and every time you click it, it calls the onClickRPS function with the RPS button that was last clicked *
  
  // 1. loop through the buttons using a forEach loop
  rpsButtons.forEach(rpsButton => {
    // 2. Add a 'click' event listener to each button
    // 3. Call the onClickRPS function every time someone clicks
    // 4. Make sure to pass the currently selected rps button as an argument
    rpsButton.onclick = () => onClickRPS(rpsButton.value)
  })
 
  // Add a click listener to the end game button that runs the endGame() function on click
  const endGameButton = document.getElementById('endGameButton')
  // add event listener
  endGameButton.onclick = () => endGame(totalScore)
}


// ** endGame function clears all the text on the DOM **
function endGame(totalScore) {
  // Reset scores
  totalScore['playerScore'] = 0
  totalScore['computerScore'] = 0

  const resultDiv = document.getElementById('result')
  const handsDiv = document.getElementById('hands')
  const playerScoreDiv = document.getElementById('player-score')
  
  // Clear div's on screen
  resultDiv.innerText = ''
  handsDiv.innerText = ''
  playerScoreDiv.innerText = ''
  
}

playGame()