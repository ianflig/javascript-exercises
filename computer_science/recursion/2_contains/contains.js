const contains = function (obj, value) {
  if (obj === value || (Number.isNaN(obj) && Number.isNaN(value))) {
    return true;
  }

  if (typeof obj !== "object" || obj === null) {
    return false;
  }
  // console.log(obj);
  for (let object of Object.values(obj)) {
    // console.log("--------------");
    // console.log("INSIDE LOOP");
    // console.log("--------------");
    // console.log(Object.values(obj));
    // console.log("sending -> ", object);
    // console.log("------------------------------------------");
    if (contains(object, value)) {
      return true;
    }
  }

  return false;
};

// Do not edit below this line
module.exports = contains;

console.log(
  contains(
    {
      test: { test: 44 },
      array: {
        arrayinside: [42],
        anotherButWithString: ["45"],
        anotherObj: { empty: null, car: NaN, yes: "yes" },
      },
    },
    NaN,
  ),
);

// console.log(
//   typeof NaN,
//   NaN === NaN,
//   Number.isNaN({
//     test: { test: 44 },
//     array: {
//       arrayinside: [42],
//       anotherButWithString: ["45"],
//       anotherObj: { empty: null, car: NaN, yes: "yes" },
//     },
//   }),
//   Number.isNaN("d"),
// );
