// import

export default class Game {
  constructor() {
    this.turn = "player1";
  }

  play(){

  }

  changeTurn() {
    if (this.turn === "player1") this.turn = "player2";
    else this.turn = "player1";
  }
}
