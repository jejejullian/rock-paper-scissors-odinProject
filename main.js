const btnRock = document.getElementById("rock");
const btnPaper = document.getElementById("paper");
const btnScissors = document.getElementById("scissors");
const result = document.getElementById("result");
const score = document.getElementById("score");
const choices = document.getElementById("choices");
const btnReset = document.getElementById("reset");


// Langkah 4: Variabel skor global
let humanScore = 0;
let computerScore = 0;

function disableButtons() {
  btnRock.disabled = true;
  btnPaper.disabled = true;
  btnScissors.disabled = true;
}

function resetGame() {
  humanScore = 0;
  computerScore = 0;
  score.innerText = "player: 0 | computer: 0";
  choices.innerText = "You: ... | Computer: ...";
  result.innerText = "Let's play again!";
  btnRock.disabled = false;
  btnPaper.disabled = false;
  btnScissors.disabled = false;
}


function checkWinner() {
  // Cek kemenangan
  if (humanScore === 5) {
    result.innerText = "🏆 You win the game!";
    disableButtons();
  } else if (computerScore === 5) {
    result.innerText = "💻 Computer wins the game!";
    disableButtons();
  }
}

// Langkah 2: Pilihan acak untuk komputer
function getComputerChoice() {
  const computerChoice = Math.floor(Math.random() * 3) + 1;
  if (computerChoice === 1) {
    return "rock";
  } else if (computerChoice === 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

// Event Listener tombol
btnRock.addEventListener("click", () => handleClick("rock"));
btnPaper.addEventListener("click", () => handleClick("paper"));
btnScissors.addEventListener("click", () => handleClick("scissors"));
btnReset.addEventListener("click", resetGame);


// Handler tombol
function handleClick(humanChoice) {
  const computerChoice = getComputerChoice();
  playRound(humanChoice, computerChoice);
}

// Satu ronde permainan
function playRound(humanChoice, computerChoice) {
  const resultHumanChoice = humanChoice.toLowerCase();

  // Tampilkan pilihan
  choices.innerText = `You: ${humanChoice} | Computer: ${computerChoice}`;

  // Tentukan hasil
  if (resultHumanChoice === computerChoice) {
    result.innerText = `It's a draw! Both chose ${humanChoice}`;
  } else if ((resultHumanChoice === "rock" && computerChoice === "scissors") || (resultHumanChoice === "paper" && computerChoice === "rock") || (resultHumanChoice === "scissors" && computerChoice === "paper")) {
    humanScore++;
    result.innerText = `You win! ${resultHumanChoice} beats ${computerChoice}`;
  } else {
    computerScore++;
    result.innerText = `You lose! ${computerChoice} beats ${resultHumanChoice}`;
  }

  // Update skor
  score.innerText = `player: ${humanScore} | computer: ${computerScore}`;

  checkWinner()
}
