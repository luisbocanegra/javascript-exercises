const removeFromArray = function (theArray, ...args) {
  // my solution using loop
  let result = [];

  // loop through the array and copy elements
  // that are not in the args array to result one
  for (i = 0; i < theArray.length; i++) {
    if (!args.includes(theArray[i])) {
      result.push(theArray[i]);
    }
  }
  return result;
};

// solution 1 - array.forEach
// we have 2 solutions here, an easier one and a more advanced one.
const removeFromArrayTOP1 = function (array, ...args) {
  // create a new empty array
  const newArray = [];
  // use forEach to go through the array
  array.forEach((item) => {
    // push every element into the new array
    // UNLESS it is included in the function arguments
    // so we create a new array with every item, except those that should be removed
    if (!args.includes(item)) {
      newArray.push(item);
    }
  });
  // and return that array
  return newArray;
};

// solution 2 - array.filter
// A simpler, but more advanced way to do it is to use the 'filter' function,
// which basically does what we did with the forEach above.
var removeFromArrayTOP2 = function (array, ...args) {
  return array.filter(val => !args.includes(val))
}



// Do not edit below this line
module.exports = removeFromArray;
