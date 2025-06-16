const dotenv = require('dotenv');
dotenv.config();

const express = require("express")
const app = express();
const cors = require('cors')

app.use(cors({
    origin: 'http://localhost:5173', // your frontend URL
    credentials: true
}));

const cookieParser= require('cookie-parser')
app.use(cookieParser())



const db = require("./database/db")
db();

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

const userRoutes = require("./routes/user.routes")
const captainRoutes = require('./routes/captian.routes')

app.get("/", (req, res) => {
    res.send("Hello world from server")
})

app.use("/users", userRoutes);
app.use('/captains', captainRoutes)

module.exports = app;