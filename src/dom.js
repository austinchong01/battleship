
function createBoard(name) {
  const board = document.createElement("div");
  board.setAttribute("class", name);

  const table = document.createElement("table");

  const header = document.createElement("tr");
  const blank = document.createElement("th")
  header.appendChild(blank)
  for (let i = 0; i < 10; i += 1){
    const th = document.createElement("th");
    th.textContent = i;
    // th.textContent = String.fromCharCode(65 + i);
    header.appendChild(th)
  }
  table.appendChild(header)


  for (let i = 0; i < 10; i += 1) {
    const tr = document.createElement("tr");

    const th = document.createElement("th");
    th.textContent = i;
    // th.textContent = i + 1;
    tr.appendChild(th)

    for (let j = 0; j < 10; j += 1) {
      const td = document.createElement("td");
      td.setAttribute("data-index", `[${[i, j]}]`);
      td.setAttribute("class", `${name}`)
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
  board.appendChild(table)
  document.body.appendChild(board);
}

export { createBoard };
