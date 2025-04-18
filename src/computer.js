const clicked = [];

function randomCoord() {
    const rand = Math.floor(Math.random() * 100);
    return rand;
}

function computerClick() {
    let boxNum = randomCoord();
    while (clicked.includes(boxNum)){
        boxNum = randomCoord();
    }
    clicked.push(boxNum);
    const x = boxNum % 10;
    const y = Math.floor(boxNum / 10);
    const coord = [x, y];
    return coord;
}

computerClick()
computerClick()
computerClick()
computerClick()
computerClick()

export { computerClick }