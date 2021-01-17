"use strict"

const { Matchers } = require("@pact-foundation/pact");
const { getClients, postClient } = require("../../../src/consumer");

describe("Clients Service", () => {
    const GET_EXPECTED_BODY = [{
        "firstName": "Lisa",
        "lastName": "Simpson",
        "age": 8,
        "id": 1
    }, {
        "firstName": "Wonder",
        "lastName": "Woman",
        "age": 30,
        "id": 2
    }, {
        "firstName": "Homer",
        "lastName": "Simpson",
        "age": 39,
        "id": 3
    }]

    afterEach(() => provider.verify());
    
})