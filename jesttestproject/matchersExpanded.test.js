const carStock = [
    'BMW',
    'Mercedes',
    'Ferrari',
    'Toyota',
];

const multiply = require("./multiply");

// Will match
test('there is pool in Liverpool',() => {
    expect('Liverpool').toMatch(/pool/);
});

// Will not macth
test('there is pool in Liverpool',() => {
    expect('Liverpool').toMatch(/pol/);
});

describe("test multiply positive scenarios", () => {
    test("multiply 3*2 should equal to 6", () => {
        expect(multiply(3,2)).toBe(6);
        expect(multiply(3,2)).toBeGreaterThan(5);
        expect(multiply(3,2)).toBeLessThan(7);
        expect(multiply(3,2)).toBeLessThanOrEqual(6);
    });

});

test("null", () => {
    const n = null;

    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
});

test('that the car stock list has a Ferrari',() => {
    expect(carStock).toContain('Ferrari');
});
