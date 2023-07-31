// Função para embaralhar o baralho de cartas
const shuffleDeck = () => {
    const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
    const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
  
    const deck = [];
    for (const suit of suits) {
      for (const rank of ranks) {
        deck.push({ suit, rank });
      }
    }
  
    // Algoritmo de embaralhamento (Fisher-Yates Shuffle)
    for (let i = deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [deck[i], deck[j]] = [deck[j], deck[i]];
    }
  
    return deck;
  };
  
  // Função para distribuir cartas para os jogadores
  const dealCards = (deck, players) => {
    let playerIndex = 0;
    while (deck.length > 0) {
      const card = deck.pop();
      players[playerIndex].addToHand(card);
      playerIndex = (playerIndex + 1) % players.length;
    }
  };
  
  module.exports = {
    shuffleDeck,
    dealCards,
  };
  