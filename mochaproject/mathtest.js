// Test Suite - Mathematical Operations

// Test Cases

// 1. Addition
// 2. Subtraction
// 3. Multiplication
// 4. Division

var assert = require('assert');

describe("Mathematical Operations - Test Suite", function(){
    it("Adds two numbers", function(){
        var a = 10;
        var b = 10;
        var c = a + b;

        assert.equal(c, 20);
    });

    it("Subtracts two numbers", function(){
        var a = 10;
        var b = 10;
        var c = a - b;

        assert.equal(c, 0);
    });

    it("Multiplies two numbers", function(){
        var a = 10;
        var b = 10;
        var c = a * b;

        assert.equal(c, 100);
    });

    it("Multiplies two numbers", function(){
        var a = 10;
        var b = 10;
        var c = a / b;

        assert.equal(c, 1);
    });

});
