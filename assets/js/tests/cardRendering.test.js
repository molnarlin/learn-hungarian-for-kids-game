/**
 * @jest-environment jsdom
 */

const { cards, shuffleCards} = require('../script.js');
let cardContainer = document.getElementById("card-container"); // Declare container variable in the outer scope

beforeEach(() => {
  let fs = require('fs');
  let fileContents = fs.readFileSync('game.html', 'utf-8');
  document.open();
  document.write(fileContents);
  document.close();
});

describe('card rendering', () => {
    test('renders cards with correct HTML structure and content', () => {
        // Call the function that renders the cards
        shuffleCards();

        // Assert that all cards are present in the DOM
    expect(container.querySelectorAll('.memory-card').length).toBe(cards.length);
    });
});