const fibonacci = function (position) {
  if (position < 0) return 'OOPS';
  if (position === 0) return 0;
  let prevNum1 = 1;
  let prevNum2 = 0;

  for (let i = 2; i <= position; i++) {
    let current = prevNum1 + prevNum2;
    prevNum2 = prevNum1;
    prevNum1 = current;
    // console.log(prevNum1)
  }

  return prevNum1;
};

// Do not edit below this line
module.exports = fibonacci;
