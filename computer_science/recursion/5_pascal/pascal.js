const pascal = function (number) {
  if (number === 1) return [1];

  let result = [0].concat(pascal(number - 1));
  for (let i = 0; i < result.length - 1; i++) {
    result[i] = result[i] + result[i + 1];
  }

  return result;
};

// Do not edit below this line
module.exports = pascal;
