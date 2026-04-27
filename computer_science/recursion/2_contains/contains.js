const contains = function (obj, value) {
  if (typeof obj !== "object") {
    if (obj === value) {
      return true;
    }
  } else {
    let object = Object.values(obj);

    for (let i = 0; i < object.length; i++) {
      if (contains(object[i], value)) {
        return true;
      } else {
        contains(object[i], value);
      }
    }

    return false;
  }
};

// Do not edit below this line
module.exports = contains;
