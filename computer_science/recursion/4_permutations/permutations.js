function permutations(array) {
  if (array.length === 0) {
    return [[]];
  }
  if (array.length === 1) {
    return array;
  }

  let result = [];

  for (let i = 0; i < array.length; i++) {
    const currentValue = [array[i]];
    const remainingValues = array.slice(0, i).concat(array.slice(i + 1));
    const valuesPermuted = permutations(remainingValues);
    for (let j = 0; j < valuesPermuted.length; j++) {
      const permutedArray = currentValue.concat(valuesPermuted[j]);
      result.push(permutedArray);
    }
  }
  return result;
}

// Do not edit below this line
module.exports = permutations;

console.log(permutations([]));
