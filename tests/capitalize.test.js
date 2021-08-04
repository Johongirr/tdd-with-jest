import { capitalize } from "../codes/capitalize.js";

describe("Capitalizes first letter of  each word", () => {
  test("capitalize is defined", () => {
    expect(capitalize).toBeDefined();
  });
  test("h should be H", () => {
    expect(capitalize("h")).toBe("H");
  });
  test("hello! should be Hello!", () => {
    expect(capitalize("hello!")).toBe("Hello!");
  });
  test("how are you! should be How Are You!", () => {
    expect(capitalize("how are you!")).toBe("How Are You!");
  });
});
