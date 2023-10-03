const express = require('express');
const service = require('./service/service');

app.get('/', async (req, res) => {
  try {
    const data = await service.getData();
    return res.status(200).json("ROTA GET");
  } catch (error) {
    return res.status(500).json({ error: 'Erro interno no servidor' });
  }
});

app.post('/', async (req, res) => {
    try {
        const data = await service.postData(req.body);
        return res.status(200).json("ROTA POST");
    } catch (error) {
        return res.status(500).json({ error: 'Erro interno no servidor' });
    }
});

app.put('/', async (req, res) => {
    try {
        const data = await service.putData(req.body);
        return res.status(200).json("ROTA PUT");
    } catch (error) {
        return res.status(500).json({ error: 'Erro interno no servidor' });
    }
});

app.delete('/', async (req, res) => {
    try {
        const data = await service.deleteData(req.body);
        return res.status(200).json("Rota DELETE");
    } catch (error) {
        return res.status(500).json({ error: 'Erro interno no servidor' });
    }
});

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`));