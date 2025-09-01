function playGame() {
  //Escribir la logica para que la computadora haga su eleccion
  function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
      return "Piedra";
    } else if (choice === 1) {
      return "Papel";
    } else {
      return "Tijera";
    }
  }

  //Inicializar las variables para almacenar el puntaje
  let humanScore = 0;
  let computerScore = 0;
  let humanChoice;
  let computerChoice;
  const updateHumanCounter = document.querySelector(".human-score");
  const updateComputerCounter = document.querySelector(".computer-score");
  const msg = document.querySelector('.msg');

  //Escribir la logica para jugar una sola ronda
  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      return msg.textContent = "Es un empate";
    } else if (humanChoice === "Piedra" && computerChoice === "Papel") {
      ++computerScore;
      updateComputerCounter.textContent = `${computerScore}`;
      return msg.textContent = "Pierdes, Papel le gana a Piedra";
    } else if (humanChoice === "Piedra" && computerChoice === "Tijera") {
      ++humanScore;
      updateHumanCounter.textContent = `${humanScore}`;
      return msg.textContent = "Ganas, Piedra le gana a Tijera";
    } else if (humanChoice === "Papel" && computerChoice === "Tijera") {
      ++computerScore;
      updateComputerCounter.textContent = `${computerScore}`;
      return msg.textContent = "Pierdes, Tijera le gana a Papel";
    } else if (humanChoice === "Papel" && computerChoice === "Piedra") {
      ++humanScore;
      updateHumanCounter.textContent = `${humanScore}`;
      return msg.textContent = "Ganas, Papel le gana a Piedra";
    } else if (humanChoice === "Tijera" && computerChoice === "Piedra") {
      ++computerScore;
      updateComputerCounter.textContent = `${computerScore}`;
      return msg.textContent = "Pierdes, Piedra le gana a Tijera";
    } else if (humanChoice === "Tijera" && computerChoice === "Papel") {
      ++humanScore;
      updateHumanCounter.textContent = `${humanScore}`;
      return msg.textContent = "Ganas, Tijera le gana a Papel";
    } else {
      return msg.textContent = "Opcion Desconocida";
    }
  }

  const button = document.querySelectorAll("#buttons-choice > button");
  button.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      if (humanScore >= 5 || computerScore >= 5) return;

      humanChoice = e.target.textContent;
      computerChoice = getComputerChoice();
      playRound(humanChoice, computerChoice);
      
      if (humanScore === 5) {
        msg.textContent = "🎉 Ganaste el Juego";
      } else if (computerScore === 5) {
        msg.textContent = "💀 Perdiste, intentalo de nuevo!";
      }
    });
  });
}

playGame();
