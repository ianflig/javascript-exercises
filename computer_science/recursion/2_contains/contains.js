const contains = function (obj, value) {
  if (typeof obj !== "object" || obj === null) {
    if (obj === value) {
      return true;
    }
  } else {
    // console.log(obj);
    for (let object of Object.values(obj)) {
      //   console.log("--------------");
      //   console.log("INSIDE LOOP");
      //   console.log("--------------");
      //   console.log(Object.values(obj));
      //   console.log("sending -> ", object);
      //   console.log("------------------------------------------");
      if (contains(object, value)) {
        return true;
      }
    }

    return false;
  }
};

// Do not edit below this line
module.exports = contains;

// console.log(
//   contains(
//     {
//       test: { test: 44 },
//       array: {
//         arrayinside: [42],
//         anotherButWithString: ["45"],
//         anotherObj: { empty: null, car: "yes" },
//       },
//     },
//     null,
//   ),
// );
