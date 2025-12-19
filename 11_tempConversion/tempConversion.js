function convertToOneDecimal(num){
  return Math.round(num * 10) / 10
}

const convertToCelsius = function(far) {
    return convertToOneDecimal((far - 32) * 5/9);
};

const convertToFahrenheit = function(cel) {
    return convertToOneDecimal((cel * 9/5 + 32));
};

console.log(convertToCelsius(32), 
convertToFahrenheit(0))

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
