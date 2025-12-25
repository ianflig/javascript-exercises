const findTheOldest = function(array) {
    return array.map(person => ({
        ...person,
        // si no tiene fecha de muerte se le pone la actual
        // tambien se puede usar (new Date()).getFullYear()
        // para obtener el año actual
        yearsOld : ((person.yearOfDeath || 2025) - person.yearOfBirth) 
    }))
    .sort((a, b) => ((b.yearsOld) - (a.yearsOld)))
    .reduce((a, b) => (b > a) ? b : a); 
};


// Do not edit below this line
module.exports = findTheOldest;
