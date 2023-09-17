const reverseString = function (string = "") {
  // using loop
  // let reversed = '';
  // for (i = string.length - 1; i >= 0; i--) {
  //   reversed += string[i];
  // }
  // return reversed;

  // using methods
  // convert to array
  // reverse the array
  // join into final string
  return string.split("").reverse().join("");
};

// Do not edit below this line
module.exports = reverseString;
