const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const Repository = require("./repository");
const server = express();

// Middleware
server.use(cors());
server.use(bodyParser.json());
server.use(
    bodyParser.urlencoded({
        extended: true,
    })
);
server.use((req, res, next) => {
    res.header("Content-Type", "application/json; charset=utf-8");
    next();
});

const clientRepository = new Repository()

// Load client data into a repository object
const importData = () => {
    const data = require("./data/clientData.json");

    data.reduce((a, v) => {
        v.id = a + 1;
        clientRepository.add(v);
        return a + 1;
    }, 0);
};
