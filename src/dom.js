import { coordToNum } from "./operations";

function renderBoard(player) {
  const board = document.querySelector(`.${player.name}-board`);
  board.textContent = ""; // reset
  const table = document.createElement("table");

  // horizontal header
  const header = document.createElement("tr");
  const blank = document.createElement("th");
  header.appendChild(blank);
  for (let i = 0; i < 10; i += 1) {
    const th = document.createElement("th");
    th.textContent = i;
    // th.textContent = String.fromCharCode(65 + i);
    header.appendChild(th);
  }
  table.appendChild(header);

  for (let i = 0; i < 10; i += 1) {
    const tr = document.createElement("tr");

    // vertical header
    const th = document.createElement("th");
    th.textContent = i;
    // th.textContent = i + 1;
    tr.appendChild(th);

    for (let j = 0; j < 10; j += 1) {
      const td = document.createElement("td");
      td.setAttribute("data-index", `[${[j, i]}]`);
      td.setAttribute("class", player.name);
      if (player.gameboard.board[j][i] !== null) td.classList.add("ship");

      const num = coordToNum([j, i]);
      if (player.gameboard.clicked.includes(num))
        td.setAttribute("data-click", "clicked");

      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
  board.appendChild(table);
}

function createLabel(player) {
  const board = document.querySelector(`.${player.name}`);
  const label = document.createElement("h2");
  label.textContent = player.name;
  board.appendChild(label);
}

function displayTurn(game) {
  const turnDOM = document.querySelector("#turn");
  turnDOM.textContent = `${game.turn.name}'s Turn`;
}

function displayEnd(player) {
  const winner = player.name;
  const winnerLabel = document.querySelector("#winner");
  winnerLabel.textContent = `${winner} Wins!`;
}

function domListener(game) {
  const click = document.querySelector("#game");
  click.addEventListener("click", (e) => {
    const box = e.target;
    const domPlayer = box.className.split(" ")[0];
    if (
      box.getAttribute("data-click") === null &&
      box.tagName === "TD" &&
      domPlayer !== game.turn.name &&
      !game.gameOver()
    ) {
      const coord = JSON.parse(box.getAttribute("data-index"));
      const player = game.players[domPlayer];
      
      player.gameboard.click(coord);

      if (game.player2.type === "computer") {
        game.computerTurn();
      } else {
        if (game.gameOver()) {
          displayEnd(game.turn);
          return;
        }
        game.changeTurn()
      }
      displayTurn(game);

      renderBoard(game.player1);
      renderBoard(game.player2);
    }
  });
}

export { renderBoard, createLabel, domListener, displayTurn, displayEnd };
