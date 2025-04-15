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
    header.appendChild(th)
  }
  table.appendChild(header)


  for (let i = 0; i < 10; i += 1) {
    const tr = document.createElement("tr");

    const th = document.createElement("th");
    th.textContent = i;
    tr.appendChild(th)

    for (let j = 0; j < 10; j += 1) {
      const td = document.createElement("td");
      td.setAttribute("class", `[${[i, j]}]`);
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
  board.appendChild(table)
  document.body.appendChild(board);
}

export { createBoard };
