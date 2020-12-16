const express = require('express');
const request = require('supertest');
const expect = require('chai').expect;

const app = express();

app.get('/first', (err, res) => {
    res.status(200).json({ 
        "ok": "response" 
    });
});

describe("First test", () => {
    it("OK response", () => {
        request(app)
            .get('/first')
            .end((err, res) => {
                expect(res.statusCode).to.be.equal(200);
            });
    });

    it("Mocky OK response", () => {
        request('http://www.mocky.io/v3/d70dd59f-1a5f-4346-b27a-54723255ffcf')
            .get('/v2/5ea9a648340000980d3f070b')
            .expect(200);
    });

});
