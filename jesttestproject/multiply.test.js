const multiply = require("./multiply");

describe("test multiply positive scenarios", () => {
    test("multiply 3*2 should equal to 6", () => {
        expect(multiply(3,2)).toBe(6);
    });

});

test("object example", () => {
    const data = {first: 1};
    data['second'] = 2;
    expect(data).toEqual({first: 1, second: 2});
    
});
