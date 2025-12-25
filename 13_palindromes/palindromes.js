const palindromes = function (string) {
    // valid characters
    const alphanumerical = "abcdefghijklmnñopqrstuvwxyz0123456789";

    // get clean string
    let cleanedString = string
    .toLowerCase()
    .split("")
    .filter(character => alphanumerical.includes(character))
    .join("");

    //reversed string
    let reversedString = cleanedString.split("").reverse().join("");
    console.log(reversedString)
    return reversedString == cleanedString ? true : false;
};
console.log(palindromes("racecar"));
// Do not edit below this line
module.exports = palindromes;
