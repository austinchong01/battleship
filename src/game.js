import { computerClick } from "./computer";
import { coordToNum, numToCoord } from "./operations";
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

  endGame(player){
    console.log(`${player.name} wins!`);
  }

  changeTurn() {
    if (this.gameOver()) this.endGame(this.turn);

    let randNum = computerClick();
    while(this.turn.gameboard.clicked.includes(randNum))
      randNum = computerClick();
    const coord = numToCoord(randNum);

    this.turn.gameboard.click(coord);
    this.turn = this.player2;

    if (this.gameOver()) this.endGame(this.turn);
    this.turn = this.player1;
  }
}
