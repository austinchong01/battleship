import { coordToNum } from "./operations";
import { startGame, addShips } from "./index.js";

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
        game.changeTurn();
      }
      displayTurn(game);

      renderBoard(game.player1);
      renderBoard(game.player2);
    }
  });
}

function getPlayerType() {
  const dialog = document.querySelector("#getType");
  dialog.showModal();

  dialog.addEventListener("click", (e) => {
    if (e.target.getAttribute("class") === "typeDialog") {
      const type = e.target.getAttribute("id");
      startGame(type);
      dialog.close();
    }
  });
}

function getShips(game) {
  const dialog = document.querySelector(`#PlayerVsplayer`);
  dialog.showModal();

  const submit = document.querySelector("#submit");
  submit.addEventListener("click", () => {
    let player2 = [];
    if (dialog.getAttribute("id") === "PlayerVsplayer") {
      const p2s11 = document.querySelector("#p2s11");
      const p2s12 = document.querySelector("#p2s12");
      const p2s21 = document.querySelector("#p2s21");
      const p2s22 = document.querySelector("#p2s22");
      const p2s31 = document.querySelector("#p2s31");
      const p2s32 = document.querySelector("#p2s32");
      const p2s41 = document.querySelector("#p2s41");
      const p2s42 = document.querySelector("#p2s42");

      player2 = [
        [p2s11.value, p2s12.value],
        [p2s21.value, p2s22.value],
        [p2s31.value, p2s32.value],
        [p2s41.value, p2s42.value],
      ];
    }

    const p1s11 = document.querySelector("#p1s11");
    const p1s12 = document.querySelector("#p1s12");
    const p1s21 = document.querySelector("#p1s21");
    const p1s22 = document.querySelector("#p1s22");
    const p1s31 = document.querySelector("#p1s31");
    const p1s32 = document.querySelector("#p1s32");
    const p1s41 = document.querySelector("#p1s41");
    const p1s42 = document.querySelector("#p1s42");

    const player1 = [
      [p1s11.value, p1s12.value],
      [p1s21.value, p1s22.value],
      [p1s31.value, p1s32.value],
      [p1s41.value, p1s42.value],
    ];
    addShips(game, player1, player2);
    dialog.close();
  });
}

export {
  renderBoard,
  createLabel,
  domListener,
  displayTurn,
  displayEnd,
  getPlayerType,
  getShips,
};
