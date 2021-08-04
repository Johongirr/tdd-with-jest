import { Calculator } from "../codes/calculator";

describe("Calculator for basic math operations", () => {
  const calculator = new Calculator();
  test("Calculator should have been created", () => {
    expect(calculator).toBeInstanceOf(Calculator);
  });
  describe("Add", () => {
    // For adding numbers
    test("calculator.add() should be defined", () => {
      expect(calculator.add).toBeDefined();
    });
    test("calculator.add(50, 50) should be 100", () => {
      expect(calculator.add(50, 50)).toBe(100);
    });
    test("calculator.add(0, 0) should be 0", () => {
      expect(calculator.add(0, 0)).toBe(0);
    });
  });
  describe("Substract", () => {
    // For substracting numbers
    test("calculator.substract() should be defined", () => {
      expect(calculator.substract()).toBeDefined();
    });
    test("calculator.substract(10, 2) should be 8", () => {
      expect(calculator.substract(10, 2)).toBe(8);
    });
    test("calculator.substract(0, 2) should be 2", () => {
      expect(calculator.substract(0, 2)).toBe(-2);
    });
    test("calculator.substract(10, 5) should be 2", () => {
      expect(calculator.substract(10, 5)).not.toBe(-5);
    });
  });

  describe("Multiply", () => {
    // For multiplying numbers
    test("calculator.multiply() should be defined", () => {
      expect(calculator.multiply()).toBeDefined();
    });
    test("calculator.multiply(10, 2) should be 20", () => {
      expect(calculator.multiply(10, 2)).toBe(20);
    });
    test("calculator.substract(30, 10) should be 300", () => {
      expect(calculator.multiply(30, 10)).toBe(300);
    });
  });

  describe("Divide", () => {
    // For dividing numbers
    test("calculator.divide() should be defined", () => {
      expect(calculator.divide()).toBeDefined();
    });
    test("calculator.divide(10, 2) should be 5", () => {
      expect(calculator.divide(10, 2)).toBe(5);
    });
    test("calculator.divide(5, 0) should be Infinity", () => {
      expect(calculator.divide(5, 0)).toBe(Infinity);
    });
  });
});
