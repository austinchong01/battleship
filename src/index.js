import Game from "./game.js";
import {
  renderBoard,
  createLabel,
  domListener,
  displayTurn,
  getPlayerType,
  getShips
} from "./dom.js";
import "./styles.css";

// ask if computer v player
getPlayerType();

function startGame(type) {
  const game = new Game(["player1", "player"], ["player2", type]);
  getShips(game);
}

function addShips(game, arr1, arr2){
  for (let i = 0; i < 4; i += 1){
    if(arr2.length !== 0){
      game.player2.gameboard.addShip([[parseInt(arr2[i][0]), parseInt(arr2[i][1])]])
    }
    game.player1.gameboard.addShip([[parseInt(arr1[i][0]), parseInt(arr1[i][1])]])
  }

  displayTurn(game);
  createLabel(game.player1);
  createLabel(game.player2);


  renderBoard(game.player1);
  renderBoard(game.player2);

  domListener(game);
}

export { startGame, addShips };
