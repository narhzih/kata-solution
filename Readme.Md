# Kata To French Converter

This package lets you convert array of numbers between 1 and 999,999 to the equivalent array of french numbers (in words)

## How to use

Install the package with the following comand:

```bash
$ npm i --save-dev kata-to-french-converter@2.1.0
```

In your script:

```
import { Converter } from 'kata-to-french-converter';

try {
    // It throws an error if one of your numbers is not a number
    const converter = new Converter();
    console.log(converter.convertDigits([1,4,5,6]))
}catch(err) {
    console.log(err.message)
    // Or do whatever you want with the eror
}
```

Sample output: ['un', 'quatre', 'cinq', 'six',]
