import { RomanNumerals } from "../romanNumerals.js";

describe("Roman Numerals", function() {
    [{testName: "1 should be I", intValue:1, expectedResult: "I"},
    {testName: "2 should be II", intValue:2, expectedResult: "II"}
    ].map(testCase => {
        it(testCase.testName, function() {
            const romanNumerals = new RomanNumerals();
    
            const result = romanNumerals.convert(testCase.intValue);
            
            expect(result).toBe(testCase.expectedResult);
        });



    })



  });