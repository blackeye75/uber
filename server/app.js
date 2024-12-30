const dotenv = require('dotenv');
dotenv.config();

const express = require("express")
const app = express();

const cors = require('cors')
app.use(cors())

const db = require("./database/db")
db();

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

const userRoutes = require("./routes/user.routes")

app.get("/", (req, res) => {
    res.send("Hello world from server")
})

app.use("/users", userRoutes);

module.exports = app; 