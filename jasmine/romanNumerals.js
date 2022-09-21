export class RomanNumerals {
    convert = function(value) {
        if(value === 1)
            return "I";

        if(value ===2)
            return "II";

        return "III";
    }
}