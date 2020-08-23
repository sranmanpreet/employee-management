require('./config/config');
require('./models/db');

const mongoose = require('mongoose');
const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');

var app = express();

const rtsIndex = require('./routes/index.router');
// middleware
app.use(bodyparser.json());
app.use(cors({
    origin: [
        "http://127.0.0.1:4200", "http://localhost:4200"
    ],
    credentials: true
}));

app.use('/api', rtsIndex);

app.listen(process.env.PORT, () => console.log('Server started at port :' + process.env.PORT));