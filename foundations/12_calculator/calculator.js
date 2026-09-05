const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (array) {
  if (array.length === 0) {
    return 0;
  }

  return array.reduce((sum, item) => sum + item, 0);
};

const multiply = function (array) {
  if (array.length === 0) {
    return 0;
  }

  return array.reduce((sum, item) => sum * item);
};

const power = function (base, exponent) {
  return Math.pow(base, exponent);
};

function factorial(n) {
  // Reject negative numbers
  if (n < 0) return "Undefined for negative numbers";

  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
