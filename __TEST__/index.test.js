const { sum } = require("../prueba");

test("Suma 1 + 2 = 3", () => {
  expect(sum(1, 2)).toBe(3);
});
