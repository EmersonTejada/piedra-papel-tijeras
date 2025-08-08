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

//Escribir la logica para que el usuario haga su eleccion y debe usarse la entrada de texto por consola

function getHumanChoice() {
  let choice = prompt("Elige tu opcion");
  choice = choice.charAt(0).toUpperCase() + choice.slice(1).toLowerCase();
  return choice;
}

//Escribir la logica para jugar una partida de 5 rondas

function playGame() {
  //Inicializar las variables para almacenar el puntaje

  let humanScore = 0;
  let computerScore = 0;

  //Escribir la logica para jugar una sola ronda
  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      return "Es un empate";
    } else if (humanChoice === "Piedra" && computerChoice === "Papel") {
      ++computerScore;
      return "Pierdes, Papel le gana a Piedra";
    } else if (humanChoice === "Piedra" && computerChoice === "Tijera") {
      ++humanScore;
      return "Ganas, Piedra le gana a Tijera";
    } else if (humanChoice === "Papel" && computerChoice === "Tijera") {
      ++computerScore;
      return "Pierdes, Tijera le gana a Papel";
    } else if (humanChoice === "Papel" && computerChoice === "Piedra") {
      ++humanScore;
      return "Ganas, Papel le gana a Piedra";
    } else if (humanChoice === "Tijera" && computerChoice === "Piedra") {
      ++computerScore;
      return "Pierdes, Piedra le gana a Tijera";
    } else if (humanChoice === "Tijera" && computerChoice === "Papel") {
      ++humanScore;
      return "Ganas, Tijera le gana a Papel";
    } else {
      return "Opcion Desconocida";
    }
  }

  //Definir al ganador del Juego
  function gameWinner() {
    if (humanScore > computerScore) {
      return "Ganaste el Juego";
    } else if (computerScore > humanScore) {
      return "Perdiste, intentalo de nuevo!";
    } else {
      return "Empate";
    }
  }

  console.log(playRound(getHumanChoice(), getComputerChoice()));
  console.log(humanScore);
  console.log(computerScore);
  console.log(playRound(getHumanChoice(), getComputerChoice()));
  console.log(humanScore);
  console.log(computerScore);
  console.log(playRound(getHumanChoice(), getComputerChoice()));
  console.log(humanScore);
  console.log(computerScore);
  console.log(playRound(getHumanChoice(), getComputerChoice()));
  console.log(humanScore);
  console.log(computerScore);
  console.log(playRound(getHumanChoice(), getComputerChoice()));
  console.log(humanScore);
  console.log(computerScore);
  console.log(gameWinner());

  
}

playGame();
