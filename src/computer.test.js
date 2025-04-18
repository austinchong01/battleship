import { computerClick } from "./computer";

test("computerClick 1", () => {
  expect(computerClick()).toBeInstanceOf(Array);
});

test("computerClick 2", () => {
  const attacks = [];
  for (let i = 0; i < 10; i += 1) {
    attacks.push(computerClick());
  }
  expect(attacks.length).toBe(10);
});
