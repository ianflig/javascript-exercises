const reverseString = function(str) {
    return str
    .split("")
    .reverse()
    .join("")
};

console.log(reverseString('hello there')) // returns 'ereht olleh'

// Do not edit below this line
module.exports = reverseString;
