const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
const cartRouter = require('./cart-items');

app.use(cartRouter);



app.listen(4202, (err) =>{
    console.log("The server is running!");
});