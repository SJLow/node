const express = require('express')
const app = express();

app.listen(3000, () => {
    console.log("Wazzapppp");
});

app.get('/', (req, res) => {
    res.send("Welcome to the home page baby");
});