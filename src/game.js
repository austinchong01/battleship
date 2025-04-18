import Player from "./player";

export default class Game {
  constructor(p1, p2) {
    this.player1 = new Player(p1[0], p1[1]);
    this.player2 = new Player(p2[0], p2[1]);
    this.players = { "player1": this.player1, "player2": this.player2 };
    this.turn = this.player1;
  }

  gameOver(){
    if (this.player1.gameboard.allShipsSunk() || this.player2.gameboard.allShipsSunk())
      return true;
    return false
  }

  // play(){
  //   while(!this.gameOver()){

  //   }
  // }

  changeTurn() {
    if (this.turn === this.player1) this.turn = this.player2;
    else this.turn = this.player1;
  }
}
