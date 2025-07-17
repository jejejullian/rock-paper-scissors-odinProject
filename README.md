
# Rock Paper Scissors Game 🎮

A simple Rock-Paper-Scissors game built using HTML, CSS, and JavaScript. This project is part of the [The Odin Project](https://www.theodinproject.com/) curriculum and expands the classic console-based version by adding a GUI for a more interactive user experience.

---

## 📺 Live Demo

👉 [Try the game live](https://jejejullian.github.io/rock-paper-scissors-odinProject/)

---

## 🎯 Project Goals

This project is designed to practice JavaScript fundamentals and DOM manipulation by building a functional Rock Paper Scissors game:

- Create a `getComputerChoice` function to return random choices
- Get user input through buttons instead of console
- Compare both choices to determine a winner
- Play rounds until one player reaches 5 points
- Keep track of score and display results in the browser
- Add a reset button to play again

---

## 🕹️ Features

- ✅ Functional Rock, Paper, Scissors buttons
- ✅ Displays each round result with chosen options
- ✅ Tracks scores for both player and computer
- ✅ First to 5 wins the game
- ✅ Reset button to restart anytime
- ✅ Case-insensitive input handling
- ✅ Responsive layout for mobile screens

---

## 🧠 How It Works

1. **User clicks** Rock, Paper, or Scissors button.
2. **Computer randomly picks** one of the three options.
3. A round is played using `playRound()` function.
4. Scores are updated and displayed after each round.
5. Game ends when either player reaches 5 points.
6. User can click Reset to start a new game.

---

## 🛠️ Tech Stack

- **HTML5** – structure and layout
- **CSS3** – styling and responsive design
- **JavaScript (ES6+)** – game logic and DOM interaction

---

## 📦 Getting Started

To run locally:

```bash
git clone <repository_url>
cd rock-paper-scissors-odinProject
open index.html in browser
```

---

## 📁 File Structure

```
rock-paper-scissors-odinProject/
├── index.html
├── style.css
└── main.js
```

---

## 📌 Implementation Highlights

- `getComputerChoice()` – returns a random choice
- `playRound()` – handles logic for a single round
- `handleClick()` – connects buttons to the game engine
- Score & result updates via DOM (`innerText`)
- `checkWinner()` – ends the game once a player hits 5 points
- `resetGame()` – resets state and UI

---

## 📜 License

This project is open-source and available under the [MIT License](LICENSE).
