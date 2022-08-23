const Converter = require("./Converter");

function convertFromKataToFrench(digits) {
  let converter = new Converter();
  let results = [];
  if (digits && digits.length) {
    digits.forEach((digit) => {
      if (digit > 0 && digit <= 16) {
        results.push(converter.convertUnit(digit));
      } else {
        results.push("Currently working on others");
      }
    });
  }

  return results;
}

// Testing it
console.log(convertFromKataToFrench([13]));
