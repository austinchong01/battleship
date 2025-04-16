import Gameboard from './gameboard.js';

test('addShip 1', () => {
  const gameboard = new Gameboard();
  const ship = gameboard.addShip([[0, 0]]);
  expect(ship.length).toBe(1);
  expect(ship.hits).toBe(0);
  expect(ship.sunk).toBe(false);
});

test('addShip 2', () => {
  const gameboard = new Gameboard();
  const ship = gameboard.addShip([[0, 0], [1, 0]]);
  expect(ship.length).toBe(2);
  expect(ship.hits).toBe(0);
  expect(ship.sunk).toBe(false);
});

test("getShip", () => {
  const gameboard = new Gameboard();
  const ship = gameboard.addShip([[1, 0]]);
  expect(gameboard.getShip([1, 0])).toBe(ship);
});

// test("receiveAttack", () => {

// });