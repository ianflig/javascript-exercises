const totalIntegers = function (obj) {
  if (Number.isInteger(obj)) return true;

  if (typeof obj !== "object") return;

  let total = 0;
  for (let number of Object.values(obj)) {
    if (totalIntegers(number)) {
      total += totalIntegers(number);
    }
  }
  return total;
};

// Do not edit below this line
module.exports = totalIntegers;

// console.log(totalIntegers([5, 2, [3, 2]]));

// console.log(totalIntegers([[[5], 3], 0, 2, ["foo"], [], [4, [5, 6]]])); // returns 7
// console.log(totalIntegers({ a: 1, b: { a: [5, 10], b: 11 } })); // returns 4
