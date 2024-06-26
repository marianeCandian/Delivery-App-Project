const express = require('express');
const route = require('../routes/UserRoute');

const app = express();
app.use(express.json());
app.use('/login', route);

app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;