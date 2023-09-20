const palindromes = function (string = "") {
  // const letters = Array.from("abcdefghijklmnopqrstuvwxyz")

  // string = string.toLowerCase().split();

  // const filtered = string.filter((letter) => {
  //   return letters.includes(letter)
  // });

  // or use regex
  const filtered = string.toLowerCase().replace(/[^a-z0-9]/g, "");

  return (filtered.split("").reverse().join("") === filtered)
};

// Do not edit below this line
module.exports = palindromes;
