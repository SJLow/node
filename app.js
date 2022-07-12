// const express = require('express');
// const app = express();
// const port = process.env.port || 3000;

// app.listen(3000, () => {
//     console.log("Wazzapppp");
//     console.log(`Server is running on port ${PORT}`);
// });

// app.get('/', (req, res) => {
//     res.send("Welcome to the home page baby");
// });


var app = require("express")();

app.get("/", function (req, res) {
    console.log(req.socket.remoteAddress);
    console.log(req.ip);
    res.send("your IP is: " + req.ip);
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("server running on port: " + PORT);
});