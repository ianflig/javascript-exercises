const totalIntegers = function (obj) {
  if (typeof obj !== "object" || obj === null) return;

  let total = 0;
  for (let number of Object.values(obj)) {
    if (Number.isInteger(number)) {
      total++;
    } else {
      if (typeof totalIntegers(number) === "number")
        total += totalIntegers(number);
    }
  }
  return total;
};

module.exports = totalIntegers;

// console.log(totalIntegers(42));

// console.log(totalIntegers([42, 45, [7, 2, "foo"]]));
// console.log(totalIntegers([[[5], 3], 0, 2, ["foo"], [], [4, [5, 6]]])); // returns 7
// console.log(totalIntegers({ a: 1, b: { a: [5, 10], b: 11 } })); // returns 4

console.log(
  totalIntegers([
    NaN,
    [[{}], 555],
    "444",
    [],
    74.0,
    undefined,
    [[() => {}], [4], Infinity, [[[], -44.0], [null, "-4"], NaN[[]], 6]],
    () => {},
    [[], [-Infinity, ["4"], [4.7, -46.7], NaN]],
  ]),
);
