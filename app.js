const express = require('express');
const app = express();
const port = process.env.port || 3000;

app.listen(port, () => {
    console.log("Wazzapppp");
});

app.get('/', (req, res) => {
    res.send("Welcome to the home page baby");
});