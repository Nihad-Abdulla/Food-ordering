const express = require("express");
const db = require("./db.js");
const Pizza = require('./models/pizzaModel');

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Server working");
});

app.get("/getpizzas", (req, res) => {
    Pizza.find({}) // Using find without a callback
        .then(docs => {
            res.send(docs);
        })
        .catch(err => {
            console.log(err);
            res.status(500).send("Error retrieving pizzas");
        });
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
