import Game from "./game.js";
import { renderBoard, createLabel, domListener, displayTurn } from "./dom.js";
import "./styles.css";

const game = new Game(["player1", "player"], ["player2", "computer"]);

displayTurn(game);

createLabel(game.player1);
createLabel(game.player2);

game.player1.gameboard.addShip([
  [0, 0],
  [1, 0],
]);
game.player1.gameboard.addShip([
  [9, 0],
  [9, 1],
  [9, 2],
  [9, 3],
]);
// game.player1.gameboard.addShip([
//   [3, 3],
//   [3, 4],
//   [3, 5],
// ]);
// game.player1.gameboard.addShip([
//   [1, 5],
//   [1, 6],
//   [1, 7],
//   [1, 8],
//   [1, 9],
// ]);
// game.player1.gameboard.addShip([[7, 5]]);
// game.player1.gameboard.addShip([
//   [5, 8],
//   [6, 8],
// ]);

// game.player2.gameboard.addShip([
//   [0, 0],
//   [1, 0],
// ]);
// game.player2.gameboard.addShip([
//   [9, 0],
//   [9, 1],
//   [9, 2],
//   [9, 3],
// ]);
game.player2.gameboard.addShip([
  [3, 3],
  [3, 4],
  [3, 5],
]);
game.player2.gameboard.addShip([
  [1, 5],
  [1, 6],
  [1, 7],
  [1, 8],
  [1, 9],
]);
game.player2.gameboard.addShip([[7, 5]]);
game.player2.gameboard.addShip([
  [5, 8],
  [6, 8],
]);

renderBoard(game.player1);
renderBoard(game.player2);

domListener(game);
