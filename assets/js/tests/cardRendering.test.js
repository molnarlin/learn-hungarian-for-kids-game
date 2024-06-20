/**
 * @jest-environment jsdom
 */

const { cards } = require('../script.js');

beforeEach(() => {
  // Reset matchedCards array before each test
  matchedCards.length = 0;
  let fs = require('fs');
  let fileContents = fs.readFileSync('categories.html', 'utf-8');
  document.open();
  document.write(fileContents);
  document.close();
});

describe('card rendering', () => {
    test('renders cards with correct HTML structure and content', () => {
        // Create a mock container element
        const container = document.createElement('div');
        container.id = 'card-container';

        renderCards(container, [
            { id: 'one', src: 'assets/images/one.webp', audioSrc: 'assets/Audio/One.m4a' },
            { id: 'two', src: 'assets/images/two.webp', audioSrc: 'assets/Audio/Two.m4a' },
          ]);
          // Get the rendered cards
        const cards = container.querySelectorAll('.memory-card');

          // Expect the correct number of cards to be rendered
        expect(cards.length).toBe(2);

         // Expect each card to have the correct HTML structure and content
        cards.forEach((card, index) => {
        expect(card.querySelector('.front-face').src).toBe(`assets/images/${index + 1}.webp`);
        expect(card.querySelector('.back-face').src).toBe('assets/images/card-back.webp');
        expect(card.querySelector('audio').id).toBe(`${index + 1}`);
      });
    });
});