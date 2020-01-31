'use strict';
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Its alive');
});


const PORT = 3000;
app.listen(PORT, () => {
console.log(`App listening on port ${PORT}`);
});