const removeFromArray = function(arr, ...args) { /* ...args recolectar todos los valores que vengan después y crea un array que posteriormente se filtra con includes */
    const newArray = [];
    arr.forEach(
        (item) => {
            if(!args.includes(item)){
                newArray.push(item);
            }
        }
    );
    return newArray;
};

console.log(removeFromArray([1, 2, 3, 4], 3));

// Do not edit below this line
module.exports = removeFromArray;
