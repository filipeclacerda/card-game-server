class Player {
    constructor(name) {
      this.name = name;
      this.hand = [];
    }
  
    addToHand(card) {
      this.hand.push(card);
    }
  
    removeFromHand(card) {
      this.hand = this.hand.filter((c) => c !== card);
    }
  }
  
  module.exports = Player;
  