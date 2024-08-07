---
title: "Build a Rock, Paper, Scissors Game with JavaScript"
date: "06 Feb, 2023"
excerpt: "Learn how to create a simple Rock, Paper, Scissors game using JavaScript with this easy-to-follow guide. Perfect for beginners looking to build interactive web games."
---

Rock, Paper, Scissors is a timeless game enjoyed by all ages. It's simple, fun, and easy to build with JavaScript. In this guide, we'll walk you through creating a Rock, Paper, Scissors game from scratch.

## Step 1: Set Up the HTML

First, create the HTML structure for your game. Use the following code to set up the basic layout:

```html
<html>
  <head>
    <title>Rock, Paper, Scissors Game</title>
  </head>
  <body>
    <h1>Rock, Paper, Scissors</h1>
    <p>Choose your option:</p>
    <button id="rock">Rock</button>
    <button id="paper">Paper</button>
    <button id="scissors">Scissors</button>
    <p id="result"></p>
  </body>
</html>
```

This HTML code creates three buttons for the game choices—Rock, Paper, and Scissors—and a paragraph to display the game result.

## Step 2: Add JavaScript for Game Logic

Next, add JavaScript to make the game interactive. Place the following code inside a <script> tag in your HTML file:

```html
<script>
  const choices = ["rock", "paper", "scissors"];

  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const playerChoice = this.id;
      const computerChoice = choices[Math.floor(Math.random() * 3)];
      const result = determineWinner(playerChoice, computerChoice);
      displayResult(playerChoice, computerChoice, result);
    });
  });

  function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
      return "tie";
    } else if (
      (playerChoice === "rock" && computerChoice === "scissors") ||
      (playerChoice === "paper" && computerChoice === "rock") ||
      (playerChoice === "scissors" && computerChoice === "paper")
    ) {
      return "player";
    } else {
      return "computer";
    }
  }

  function displayResult(playerChoice, computerChoice, result) {
    const resultElement = document.querySelector("#result");
    resultElement.innerHTML = `You chose ${playerChoice}, the computer chose ${computerChoice}. `;
    if (result === "tie") {
      resultElement.innerHTML += "It's a tie!";
    } else if (result === "player") {
      resultElement.innerHTML += "You win!";
    } else {
      resultElement.innerHTML += "You lose!";
    }
  }
</script>
```

In this code:

- Choices Array: Defines the possible game options.
- Event Listeners: Attaches click events to the buttons to handle user selections.
- Determine Winner Function: Compares player and computer choices to decide the game outcome.
- Display Result Function: Updates the result paragraph with the game outcome.

With these simple steps, you've created a Rock, Paper, Scissors game using JavaScript. Feel free to customize and expand this game to add more features and make it your own!
