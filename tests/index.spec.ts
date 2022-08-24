import { Converter } from "./../src/index";

describe("Testing basic functionalities", () => {
  let converter: Converter;
  beforeEach(() => {
    converter = new Converter();
  });
  it("Return a correct unit", () => {
    let resp: any;
    try {
      resp = converter.convertDigits([1, 6, 7]);
    } catch (err) {}
    expect(resp).toStrictEqual(["un", "six", "sept"]);
  });
});
