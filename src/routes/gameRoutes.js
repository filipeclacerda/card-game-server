const express = require('express');
const gameController = require('../controllers/gameController');

const router = express.Router();

// Rota para iniciar um novo jogo
router.post('/novo-jogo', gameController.novoJogo);

// Rota para realizar uma jogada
router.post('/jogada', gameController.fazerJogada);

// Rota para consultar o estado atual do jogo
router.get('/estado-jogo', gameController.consultarEstadoJogo);

module.exports = router;