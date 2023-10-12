const checkFive = require("../checkFive");
const test = require("../checkFive");

describe ("Indicate if a value is '5', below or above '5'", function(){

    test("if number is less than 5 return 'less than 5'", function(){
        let number = 2;
        expect(checkFive(number)).toBe("less than 5");
    });

    test("if number is equal to 5, reutrn 'is equal to 5'", function(){
        let number = 5;
        expect(checkFive(number)).toBe("is equal to 5");
    });

    test("if number is greater than 5, return 'is greater than 5'", function(){
        let number = 6;
        expect(checkFive(number)).toBe("is greater than 5");
    });
});

