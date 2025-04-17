import { players } from "./index.js";

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
      if (player.gameboard.board[j][i] != null) {
        td.classList.add("ship");
      }
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

function domListener() {
  const click = document.querySelector("#game");
  click.addEventListener("click", (e) => {
    if (e.target.getAttribute("data-click") === null) {
      const box = e.target;
      const coord = JSON.parse(box.getAttribute("data-index"));
      const domPlayer = box.className.split(" ")[0];
      const boxType = box.className.split(" ")[1];
      box.setAttribute("data-click", "clicked");
      box.style.opacity = 0.2;

      const player = players[domPlayer];
      player.gameboard.receiveAttack(coord);
    }
  });
}

export { renderBoard, createLabel, domListener };
