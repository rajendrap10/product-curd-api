const dotenv = require("dotenv").config();
const connectDb = require("./config/db");
const express = require("express");
const router = require("./routes/productRoutes");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use('/',router);
connectDb();

module.exports = app;