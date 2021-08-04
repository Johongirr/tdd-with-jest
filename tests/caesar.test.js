import { caesar } from "../codes/caesar";

describe("Caesar cipher", () => {
  describe("Positive numbers", () => {
    test("caesar is defined", () => {
      expect(caesar).toBeDefined();
    });
    test("passing 0 shift returns original string", () => {
      expect(caesar("ab", 0)).toBe("ab");
    });
    test("can cipher single letters", () => {
      expect(caesar("a", 26)).toBe("a");
    });
    test("can wrap from z to a", () => {
      expect(caesar("z", 1)).toBe("a");
    });
    test("can cipher multiple words", () => {
      expect(caesar("hello how are you!", 5)).toBe("mjqqt mtb fwj dtz!");
    });
    test("can cipher different cases", () => {
      expect(caesar("I'm a Groot!", 10)).toBe("S'w k Qbyyd!");
    });
  });
  describe("Negative numbers", () => {
    test("can work with negative numbers", () => {
      expect(caesar("mjqqt mtb fwj dtz!", -5)).toBe("hello how are you!");
    });
    test("can work with large negative numbers negative numbers", () => {
      expect(caesar("S'w k Qbyyd!", -114)).toBe("I'm a Groot!");
    });
  });
});
