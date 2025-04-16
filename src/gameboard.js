import Ship from "./ship.js";

export default class Gameboard {
  constructor() {
    this.ships = 0;
    this.board = this.createBoard();
    this.missed = [];
  }

  createBoard() {
    const board = [];
    for (let i = 0; i < 10; i += 1) {
      board[i] = [];
      for (let j = 0; j < 10; j += 1) {
        board[i][j] = null;
      }
    }
    return board;
  }

  addShip(coords) {
    const ship = new Ship(coords.length);
    for (let i = 0; i < coords.length; i += 1) {
      const coord = coords[i];
      this.board[coord[0]][coord[1]] = ship;
    }
    this.ships += 1;
    return ship;
  }

  getShip(coord) {
    return this.board[coord[0]][coord[1]];
  }

  receiveAttack(coord) {
    if (this.board[coord[0]][coord[1]] != null) {
      const ship = this.getShip(coord);
      ship.hit();
      if (ship.isSunk()) this.ships -= 1;
    } else this.missed.push(coord);
  }

  allShipsSunk() {
    if (this.ships <= 0) return true;
    return false;
  }
}