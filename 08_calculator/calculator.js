const add = function (...args) {
  // return a + b;
  return args.reduce((total, number) => total + number, 0)
};

const subtract = function (...args) {
  return args.reduce((total, number) => {
    // start from current number
    return (total === 0) ? number : total - number;
  }, 0)
};

const sum = (array = []) => array.reduce((total, number) => total + number, 0);

const multiply = function (array = []) {
  return array.reduce((total, number) => total *= number, 1)
};


const power = function (a, b) {
  return a ** b;
};

const factorial = function (number) {
  if (number < 1) return 1

  let fact = 1;
  for (let i = 1; i <= number; i++) {
    fact *= i;
  }
  return fact
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
