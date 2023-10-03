const express = require('express');
const service = require('./service/service');
const { sendResponse } = require('./middleware/middleware');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', async (req, res, next) => {
  try {
    await service.getData();
    res.locals.message = 'Rota GET';
    next();
  } catch (error) {
    next(error);
  }
}, sendResponse);

app.post('/', (req, res, next) => {
  res.locals.message = 'Rota POST';
  next();
}, sendResponse);

app.put('/', (req, res, next) => {
  res.locals.message = 'Rota PUT';
  next();
}, sendResponse);

app.delete('/', (req, res, next) => {
  res.locals.message = 'Rota DELETE';
  next();
}, sendResponse);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Erro interno no servidor' });
});

app.listen(PORT);