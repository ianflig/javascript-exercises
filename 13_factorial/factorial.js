const factorial = function(number) {
  let factorial = 1;
  if (Number.isInteger(number) && number >= 0) {
	for (let i = number; i >= 1; i--){
    factorial *= i;
    }
    } else {return};
  return factorial;
};
// Do not edit below this line
module.exports = factorial;