const express = require('express');
const gameRoutes = require('./src/routes/gameRoutes');
const app = express();
const port = process.env.PORT || 8080;

// Configuração básica do Express
app.use(express.json());

// Rota inicial de teste
app.get('/', (req, res) => {
  res.send('API do Jogo de Cartas Online está funcionando!');
});

// Roteador para as rotas do jogo de cartas
app.use('/jogo', gameRoutes);

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
