import Player from "./player.js"
import { renderBoard } from "./dom.js";
import "./styles.css";

const player1 = new Player("player1", "human");
const player2 = new Player("player2", "computer");

player1.gameboard.addShip([[0, 0], [1, 0]]);
player1.gameboard.addShip([[9, 0], [9, 1], [9, 2], [9, 3]]);
player1.gameboard.addShip([[3, 3], [3, 4], [3, 5]]);
player1.gameboard.addShip([[1, 5], [1, 6], [1, 7], [1, 8], [1, 9]]);
player1.gameboard.addShip([[7, 5]]);
player1.gameboard.addShip([[5, 8], [6, 8]]);

player2.gameboard.addShip([[0, 0], [1, 0]]);
player2.gameboard.addShip([[9, 0], [9, 1], [9, 2], [9, 3]]);
player2.gameboard.addShip([[3, 3], [3, 4], [3, 5]]);
player2.gameboard.addShip([[1, 5], [1, 6], [1, 7], [1, 8], [1, 9]]);
player2.gameboard.addShip([[7, 5]]);
player2.gameboard.addShip([[5, 8], [6, 8]]);

renderBoard(player1);
renderBoard(player2);
