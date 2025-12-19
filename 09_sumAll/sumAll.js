// funcion con validaciones
// for que sume uno después del "A" hasta el "B"
// ir sumando todo en una variable suma

const sumAll = function(numberMin, numberMax) {
    if(!Number.isInteger(numberMin) || !Number.isInteger(numberMax)) return "ERROR";
    if(numberMin < 0 || numberMax < 0) return "ERROR";
    if(numberMin > numberMax) {
        const temporalNumber = numberMin;
        numberMin = numberMax;
        numberMax = temporalNumber;
    }

    let sum = 0;
    for(let i = numberMin; i <= numberMax; i++) {
        sum += i;
    }
    return sum;
};



console.log(sumAll(1, 4));

// Do not edit below this line
module.exports = sumAll;
