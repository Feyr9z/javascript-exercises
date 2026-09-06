const palindromes = function (string) {
  const filteredString = string
    .toLowerCase()
    .split("")
    .filter((char) => {
      return /[a-zA-Z0-9]/.test(char);
    })
    .join("");

  const reverseString = filteredString.split("").reverse().join("");

  return reverseString === filteredString;
};

// Do not edit below this line
module.exports = palindromes;
