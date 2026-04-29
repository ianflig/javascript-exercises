const totalIntegers = function (obj) {
  if (typeof obj !== "object") return;

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

// const totalIntegers = function (obj) {
//   if (Array.isArray(obj)) {
//     let total = 0;
//     return obj.map((element) => {
//       if (typeof element === "number") {
//         return total++;
//       }
//     });
//   } else {
//     let total = 0;
//     for (let number of Object.values(obj)) {
//       total += totalIntegers(number);
//     }
//     return total;
//   }
// };

// Do not edit below this line
module.exports = totalIntegers;

// console.log(totalIntegers(42));

// console.log(totalIntegers([42, 45, [7, 2, "foo"]]));
// console.log(totalIntegers([[[5], 3], 0, 2, ["foo"], [], [4, [5, 6]]])); // returns 7
// console.log(totalIntegers({ a: 1, b: { a: [5, 10], b: 11 } })); // returns 4

// console.log(test, test.length);
