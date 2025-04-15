import Gameboard from "./gameboard.js";

export default class Player {
  constructor(type) {
    this.type = type; // real or computer
    this.gameboard = new Gameboard();
  }
}
