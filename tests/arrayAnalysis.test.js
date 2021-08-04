import { arrayAnalysis } from "../codes/arrayAnalysis";

describe("Return an object", () => {
  test("Should return an object with following properties {average: 4, min: 1, max: 8, length: 6", () => {
    expect(arrayAnalysis([1, 8, 3, 4, 2, 6])).toEqual({
      length: 6,
      min: 1,
      max: 8,
      average: 4,
    });
  });
});
