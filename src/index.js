import Player from "./player.js"
import { createBoard } from "./dom.js";
import "./styles.css";

const player1 = new Player("player");
// const player2 = new Player("computer");

createBoard("player1");
// createBoard("player2");