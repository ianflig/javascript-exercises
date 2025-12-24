const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	return array.reduce((acc, number) => (acc + number), 0);
};

const multiply = function(array) {
  return array.reduce((acc, number) => acc * number);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(number) {
  let factorial = 1;
	for (let i = number; i >= 1; i--){
    factorial *= i;
  }
  return factorial;
};
console.log(factorial(5));

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
