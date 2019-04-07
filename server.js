const express = require('express');

const app = express();

const port = process.env.PORT || 8000;

app.use("/", express.static(__dirname + "/../build"));

app.get('*', (req, res) => {
    res.sendFile("index.html", { root: __dirname + "./build" });
});

app.listen(port, () => console.log(`Now listening on port ${port}`));