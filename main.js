const cs = "mongodb+srv://evan:BigMistake@cluster.0b689p3.mongodb.net/?retryWrites=true&w=majority";

const {MongoClient} = require('mongodb');
const client = new MongoClient(cs);
const express = require('express');
const app = express();

app.use(function(req, res, next){ // fucking cors handler shit
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,PATCH,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    if (req.method === "OPTIONS") res.sendStatus(200);
    else next();
    });

async function start() {
    console.log("Testing");
    app.listen(3000);
}

app.get('/test', function(req, res) {
    res.send('Hello, world!');
});

start();