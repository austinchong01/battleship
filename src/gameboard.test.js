import Gameboard from "./gameboard.js";
import { findSubArray } from "./operations.js";

test("addShip 1", () => {
  const gameboard = new Gameboard();
  const ship = gameboard.addShip([[0, 0]]);
  expect(ship.length).toBe(1);
  expect(ship.hits).toBe(0);
  expect(ship.sunk).toBe(false);
  expect(gameboard.ships).toBe(1);
});

test("addShip 2", () => {
  const gameboard = new Gameboard();
  const ship = gameboard.addShip([
    [0, 0],
    [1, 0],
  ]);
  expect(ship.length).toBe(2);
  expect(ship.hits).toBe(0);
  expect(ship.sunk).toBe(false);
  expect(gameboard.ships).toBe(1);
});

test("receiveAttack 1", () => {
  const gameboard = new Gameboard();
  const ship = gameboard.addShip([[0, 0]]);
  gameboard.receiveAttack([0, 0]);
  gameboard.receiveAttack([0, 2]);
  expect(ship.hits).toBe(1);
  gameboard.receiveAttack([1, 0]);
  expect(findSubArray(gameboard.missed, [0, 2])).toBe(true);
  expect(findSubArray(gameboard.missed, [0, 0])).toBe(false);
});

test("receiveAttack 2", () => {
  const gameboard = new Gameboard();
  const ship = gameboard.addShip([
    [0, 0],
    [1, 0],
  ]);
  gameboard.receiveAttack([0, 0]);
  gameboard.receiveAttack([0, 2]);
  expect(ship.hits).toBe(1);
  expect(ship.isSunk()).toBe(false);
  gameboard.receiveAttack([1, 0]);
  expect(ship.hits).toBe(2);
  expect(findSubArray(gameboard.missed, [0, 2])).toBe(true);
  expect(findSubArray(gameboard.missed, [1, 0])).toBe(false);
  expect(findSubArray(gameboard.missed, [0, 0])).toBe(false);
});

test("allShipsSunk", () => {
  const gameboard = new Gameboard();
  gameboard.addShip([
    [0, 0],
    [1, 0],
  ]);
  expect(gameboard.allShipsSunk()).toBe(false);
  gameboard.receiveAttack([0, 0]);
  gameboard.receiveAttack([1, 0]);
  expect(gameboard.allShipsSunk()).toBe(true);
});
