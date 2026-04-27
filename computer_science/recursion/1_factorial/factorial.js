const factorial = function (number) {
  // no need to do "if number is 1 return number", it's covered with 0 validation
  if (number === 0) {
    return 1;
  }
  if (number < 0 || !Number.isInteger(number)) {
    return undefined;
  }
  return number * factorial(number - 1);
};

// Do not edit below this line
module.exports = factorial;
