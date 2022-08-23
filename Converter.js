class Converter {
  constructor() {
    this.units = {
      1: "un",
      2: "deux",
      3: "trois",
      4: "quatre",
      5: "cinq",
      6: "six",
      7: "sept",
      8: "huit",
      9: "neuf",
      10: "dix",
      11: "onze",
      12: "douze",
      13: "treize",
      14: "quatorze",
      15: "quinze",
      16: "seize",
      17: "dix-sept",
      18: "dix-huit",
      19: "dix-neuf",
    };

    this.tensPrefix = {
      10: "dix",
      20: "vingt",
      30: "trente",
      40: "quarante",
      50: "cinquante",
      60: "soixante",
      70: "septante",
      80: "huiante",
      90: "nonante",
    };

    this.hAndTPrefix = {
      100: "cent",
      1000: "mille",
      10000: "",
      100000: "",
    };
  }
  convertDigit(digit) {
    if (digit > 0 && digit <= 16) {
      return this.convertUnit(digit);
    } else if (digit > 16 && digit <= 99) {
      return this.convertTens(digit);
    } else {
      return this.convertHundredAndMore(digit);
    }
  }

  convertUnit(digit) {
    return this.units[digit];
  }

  getNumberPlaceValue(num, res = [], factor = 1) {
    if (num) {
      const val = (num % 10) * factor;
      res.unshift(val);
      return this.getNumberPlaceValue(Math.floor(num / 10), res, factor * 10);
    }
    return res;
  }

  convertTens(digit) {
    const firstNumberOfDigit = digit.toString().split("")[0];
    const numberBase = Number(firstNumberOfDigit + "0");

    if (digit <= 69) {
      const determinant = Number(digit) - Number(firstNumberOfDigit + "0");
      if (determinant > 0) {
        if (determinant == 1) {
          return `${this.tensPrefix[numberBase]}-et-un`;
        } else {
          return `${this.tensPrefix[numberBase]}-${this.units[determinant]}`;
        }
      }
    } else if (digit > 69 && digit <= 79) {
      const determinant = Number(digit) - 60;
      return `${this.tensPrefix[numberBase]}-${this.units[determinant]}`;
    } else if (digit > 79 && digit <= 89) {
      const determinant = Number(digit) - 60;
      return `quatre-${this.convertTens(determinant)}`;
    } else if (digit > 89 && digit <= 99) {
      const determinant = Number(digit) - 80;
      return `quatre-vingt-${this.units[determinant]}`;
    }
    return this.tensPrefix[numberBase] ?? "Not Found";
  }

  convertHundredAndMore(digit) {
    let placeValues = this.getNumberPlaceValue(digit);

    if (digit < 1000) {
      // Number in hundereds | only 3 palce values
      const hundered = placeValues[0];
      const tens = placeValues[1];
      const unit = placeValues[2];

      const hDet = hundered / 100;
      const convHundered = hDet > 1 ? `${this.units[hDet]}-cent` : "cent";
      const convTens =
        tens + unit > 0 ? `-${this.convertDigit(tens + unit)}` : "";
      return `${convHundered}${convTens}`;
    } else if (digit < 10000) {
      // Number in 10 thousands | only 4 place holders
      console.log(placeValues);
      const thousand = placeValues[0];
      const restSum = placeValues[1] + placeValues[2] + placeValues[3];

      const tDet = thousand / 1000;
      const convThousand = tDet > 1 ? `${this.units[tDet]}-mille` : "mille";
      const convRest =
        restSum > 0 ? `-${this.convertHundredAndMore(restSum)}` : "";
      return `${convThousand}${convRest}`;
    } else {
      return "Not wort ith";
    }
  }
}

module.exports = Converter;
