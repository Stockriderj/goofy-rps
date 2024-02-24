export default function runGame(playerMove) {
  const options = ["rock", "paper", "scissors"];
  const botMove = options[Math.floor(Math.random() * options.length)];

  let winner = null;
  switch (playerMove) {
    case "rock":
      console.log("rock");
      if (botMove === "scissors") {
        winner = "player";
      } else if (botMove === "paper") {
        winner = "bot";
      }
      break;
    case "paper":
      console.log("2");
      if (botMove === "rock") {
        winner = "player";
      } else if (botMove === "scissors") {
        winner = "bot";
      }
      break;
    case "scissors":
      console.log("3");
      if (botMove === "paper") {
        winner = "player";
      } else if (botMove === "rock") {
        winner = "bot";
      }
      break;
  }

  return { winner, botMove };
}
