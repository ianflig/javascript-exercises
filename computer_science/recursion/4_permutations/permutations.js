// const permutations = function (obj) {
//   if (obj.length === 2) {
//     return [obj[1], obj[0]];
//   } else {
//     let newArray = [];
//     for (let i = 0; i < obj.length; i++) {
//       let fixedArr = newArray.push(obj);
//       newArray.push(permutations(obj));
//     }
//   }
//   return newArray;
// };

// Do not edit below this line
module.exports = permutations;

// const obj = [1, 2, 3];
// let slicedArr1 = obj.slice(1, 2);
// console.log(slicedArr1);
// let slicedArr2 = obj.slice(1, obj.length);
// console.log(slicedArr2);
// let newArray = slicedArr1.concat(slicedArr2);

// console.log(newArray, obj);

// console.log(permutations(obj));

// let newArray = [obj[1], obj[0]];
// console.log(newArray);

// for (let i = 0; i < obj.length; i++) {
//   array = obj.splice([i]);
// }
