// Importar modelos e utilitários
const Game = require("../models/gameModel");
const Player = require("../models/playerModel");
const Card = require("../models/cardModel");
const { shuffleDeck, dealCards } = require("../utils/deckUtils");

// Iniciar um novo jogo
const novoJogo = (req, res) => {
  // Lógica para iniciar um novo jogo
  // Crie um novo jogo, distribua cartas, defina o jogador inicial, etc.

  // Exemplo de criação de um novo jogo
  const newGame = new Game();
  const players = [new Player("Player 1"), new Player("Player 2")];
  const deck = shuffleDeck(); // Embaralhar o baralho de cartas
  dealCards(deck, players); // Distribuir cartas para os jogadores

  newGame.players = players;
  newGame.currentPlayer = 0; // Defina o jogador inicial como o primeiro da lista

  // Salve o novo jogo em algum lugar (banco de dados, armazenamento em arquivo, etc.)
  // ...

  // Retorna uma resposta para o cliente com o estado inicial do jogo
  res.status(200).json({ message: "Novo jogo iniciado!", game: newGame });
};

// Realizar uma jogada
const fazerJogada = (req, res) => {
  // Lógica para processar a jogada recebida no corpo da requisição (req.body)
  // Verificar se a jogada é válida, atualizar o estado do jogo, determinar o próximo jogador, etc.
  // ...

  // Salve o estado atualizado do jogo (se necessário)
  // ...

  // Retorna uma resposta para o cliente com o estado atualizado do jogo
  res
    .status(200)
    .json({ message: "Jogada realizada com sucesso!", game: updateGame });
};

// Consultar o estado atual do jogo
const consultarEstadoJogo = (req, res) => {
  // Lógica para recuperar o estado atual do jogo (do banco de dados, armazenamento, etc.)
  // ...

  // Retorna uma resposta para o cliente com o estado atual do jogo
  res.status(200).json({ game: currentGame });
};

const updateGame = (game, playerId, card) => {
  // Encontre o jogador atual com base no ID do jogador
  const currentPlayer = game.players.find((player) => player.id === playerId);

  // Verifique se o jogador atual possui a carta em sua mão
  const cardIndex = currentPlayer.hand.findIndex(
    (c) => c.suit === card.suit && c.rank === card.rank
  );
  if (cardIndex === -1) {
    throw new Error("Jogador não possui essa carta em sua mão.");
  }

  // Realize as ações necessárias com base na carta jogada
  // Por exemplo, atualize o estado do jogo, remova a carta da mão do jogador, etc.
  // ...

  // Exemplo simples de remoção da carta da mão do jogador após a jogada
  const removedCard = currentPlayer.hand.splice(cardIndex, 1)[0];

  // Exemplo de atualização do estado do jogo após a jogada
  game.lastMove = { player: currentPlayer.name, card: removedCard };
  game.currentPlayer = (game.currentPlayer + 1) % game.players.length; // Avança para o próximo jogador

  // Salve o estado atualizado do jogo (se necessário)
  // ...

  return game; // Retorna o estado atualizado do jogo
};

module.exports = {
  novoJogo,
  fazerJogada,
  consultarEstadoJogo,
  updateGame,
};
