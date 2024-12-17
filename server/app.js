const dotenv = require('dotenv');
dotenv.config();

const express = require("express")
const app = express();

const cors = require('cors')
app.use(cors())

const db = require("./database/db")
db();

app.get("/", (req, res) => {
    res.send("Hello world from server")
})

module.exports = app; 