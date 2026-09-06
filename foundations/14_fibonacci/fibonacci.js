const fibonacci = function (n) {
  if (typeof n === "string" && !/^\d+$/.test(n)) {
    return "OOPS";
  }

  n = Number(n);

  if (n < 0) return "OOPS";
  if (n === 0) return 0;
  if (n === 1) return 1;

  let firstTerm = 0;
  let secondTerm = 1;

  for (let i = 2; i <= n; i++) {
    let nextTerm = firstTerm + secondTerm;

    firstTerm = secondTerm;
    secondTerm = nextTerm;
  }

  return secondTerm;
};

// Do not edit below this line
module.exports = fibonacci;
