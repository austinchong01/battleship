import Gameboard from "./gameboard.js";

export default class Player {
  constructor(name, type) {
    this.name = name
    this.type = type; // human or computer
    this.gameboard = new Gameboard();
  }
}
