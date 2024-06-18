import { flipCard, cards } from 'script.js';

describe('card matching', () => {
    it('matches two cards with the same id', () => {
      // Flipping two cards with the same id
      const card1 = cards[0];
      const card2 = cards[1]; // same id as card1
  
      flipCard(card1);
      flipCard(card2);
  
      // matchedCards array should have the length of 2 now
      expect(matchedCards).toHaveLength(2);
      expect(matchedCards[0].querySelector('audio').id).toBe(card1.id);
      expect(matchedCards[1].querySelector('audio').id).toBe(card2.id);
    });
  
    it('does not match two cards with different ids', () => {
      // Flipping two cards with different id
      const card1 = cards[0];
      const card2 = cards[2]; // different id than card1
    
      flipCard(card1);
      flipCard(card2);

        // matchCards array will have 0 length in this case
      expect(matchedCards).toHaveLength(0);
    });
});  