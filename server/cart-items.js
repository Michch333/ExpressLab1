const http = require('http');

let cartItems = [
    {
        id: 1,
        price: 2.00,
        product: "milk",
        quantity: 2
    },
    {
        id: 2,
        price: 1.00,
        product: "eggs",
        quantity: 1
    },
    {
        id: 3,
        price: 3.00,
        product: "bread",
        quantity: 4
    },
    {
        id: 4,
        price: 0.50,
        product: "apples",
        quantity: 12
    },
    {
        id: 5,
        price: 1.20,
        product: "bananas",
        quantity: 8
    },
    {
        id: 6,
        price: 4.50,
        product: "cake",
        quantity: 1
    }
];

const express = require('express');

const router = express.Router();


router.get("/cart-items", (req, res) => {
    res.json(cartItems);
    res.send();
}).post("/cart-items", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    console.log(req.body);
    res.send();
}).put("/cart-items/:id", (req, res) => {
    console.log(req.params.id);
    res.send();
}).delete("/cart-items/:id", (req, res) => {
    console.log(req.params.id);
    res.send();
});

module.exports = router;

