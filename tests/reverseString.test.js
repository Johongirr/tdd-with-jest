import { reverseString } from "../codes/reverseString";

describe("Reverse string", () => {
  test("reverseString is defined", () => {
    expect(reverseString).toBeDefined();
  });
  test("hello! should be !olleh", () => {
    expect(reverseString("hello!")).toBe("!olleh");
  });
  test("hello how are you! should be uoy era woh olleh!", () => {
    expect(reverseString("hello how are you!")).toBe("!uoy era woh olleh");
  });
  test("Im a Groot should be trooG a mI", () => {
    expect(reverseString("I'm, a Groot")).toBe("toorG a ,m'I");
  });
});
