const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const router = require('./routes');
app.use('/', router);

app.listen(PORT);
