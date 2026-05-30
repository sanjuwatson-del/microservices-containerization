const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Gateway Service Running');
});

app.listen(3003, '0.0.0.0', () => {
    console.log('Gateway Service running on port 3003');
});