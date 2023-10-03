const express = require('express');
const app = Express();
const PORT = 3000;

app.get('/', (req, res) => {
  return res.status(200).json('Rota GET')
});

app.post('/', (req, res) => {
  return res.status(200).json('Rota POST')
})

app.put('/', (req, res) => {
  return res.status(200).json('Rota PUT')
})
  
app.delete('/', (req, res) => {
  return res.status(200).json('Rota DELETE')
})

app.listen(PORT)