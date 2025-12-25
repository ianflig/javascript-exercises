const fibonacci = function(number) {
    let temp = [1, 1];
    if (number !== 0 && number > 0){
        for (let i = 2; i < number; i++){
            temp.push(temp[i - 2] + temp [i - 1]);
        }    
    } else if (number == 0){
        return 0} else {
            return "OOPS"}

    return temp[number - 1];
};

console.log(fibonacci(4)); // returns the 4th member of the series: 3  (1, 1, 2, 3)
console.log(fibonacci(6)); // returns 8
// Do not edit below this line
module.exports = fibonacci;
