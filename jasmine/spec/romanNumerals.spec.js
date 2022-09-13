import { RomanNumerals } from "../romanNumerals.js";

describe("Roman Numerals", function() {
    it("1 Should Convert To I", function() {
        const romanNumerals = new RomanNumerals();

        const result = romanNumerals.convert(1);
        
        expect(result).toBe("I");
    });
  });