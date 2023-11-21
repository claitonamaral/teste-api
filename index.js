const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

app.get('/api/exemplo', (req, res) => {
    res.json({ mensagem: 'Olá, mundo!' });
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
