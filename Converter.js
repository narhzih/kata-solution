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
  }

  convertUnit(digit) {
    return this.units[digit];
  }
}

module.exports = Converter;
