///////////////////////////////
// DEPENDENCIES
////////////////////////////////
// get .env variables
require("dotenv").config();
// pull PORT from .env, give default value of 3000
const { PORT } = process.env;
// import express
const express = require("express");
// create application object
const app = express();
const routes = require('./routes/index')
const cors = require('cors')

///////////////////////////////
// MiddleWare
////////////////////////////////
app.use(cors('*')); // to prevent cors errors, open access to all origins
app.use(express.urlencoded({extended: true}))
app.use(express.json()); // parse json bodies

///////////////////////////////
// ROUTES
////////////////////////////////
// create a test route
app.use("/", routes)

app.use((req, res) => {
    res.status(404).json({message: "NOT A PROPER ROUTE"})
})
///////////////////////////////
// LISTENER
////////////////////////////////
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));
