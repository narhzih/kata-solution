# Kata To French Converter

This package lets you convert array of numbers to the equivalent array of french numbers (in words)

## How to use

Install the package with the following comand:

```bash
$ npm i --save-dev kata-to-french-converter
```

In your script:

```
import { Converter } from 'kata-to-french-converter';

const converter = new Converter();
console.log(converter.convertDigits([1,4,5,6]))
```

Sample output: ['un', 'quatre', 'cinq', 'six',]
