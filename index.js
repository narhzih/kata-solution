const Converter = require("./Converter");

function convertFromKataToFrench(digits) {
  let converter = new Converter();
  let results = [];
  if (digits && digits.length) {
    digits.forEach((digit) => {
      if (digit > 0 && digit <= 16) {
        results.push(converter.convertUnit(digit));
      } else if (digit > 16 && digit <= 99) {
        results.push(converter.convertTens(digit));
      } else {
        results.push(converter.convertHundredAndMore(digit));
      }
    });
  }

  return results;
}

// Testing it
console.log(convertFromKataToFrench([13, 99, 55, 1110]));
