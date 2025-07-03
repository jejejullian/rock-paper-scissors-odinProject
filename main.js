// Langkah 4: Variabel skor global
let humanScore = 0;
let computerScore = 0;

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

// Langkah 3: Pilihan dari manusia (tanpa validasi)
function getHumanChoice() {
  const humanChoice = prompt("Insert your choice (Rock, Paper, or Scissors)");
  return humanChoice;
}

// Langkah 5: Satu ronde permainan
function playRound(humanChoice, computerChoice) {
  const resultHumanChoice = humanChoice.toLowerCase();

  if (resultHumanChoice === computerChoice) {
    console.log(`It's a draw! Both chose ${humanChoice}`);
  } else if (
    (resultHumanChoice === "rock" && computerChoice === "scissors") ||
    (resultHumanChoice === "paper" && computerChoice === "rock") ||
    (resultHumanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    console.log(`You win! ${resultHumanChoice} beats ${computerChoice}`);
  } else {
    computerScore++;
    console.log(`You lose! ${computerChoice} beats ${resultHumanChoice}`);
  }
}

// Langkah 6: Mainkan 5 ronde
function playGame() {
  humanScore = 0;
  computerScore = 0;

  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    console.log(`Current Score - You: ${humanScore} | Computer: ${computerScore}`);
    console.log('---');
  }

  if (humanScore > computerScore) {
    console.log("🏆 You win the game!");
  } else if (computerScore > humanScore) {
    console.log("💻 Computer wins the game!");
  } else {
    console.log("🤝 The game is a draw!");
  }
}

// Jalankan game
playGame();
