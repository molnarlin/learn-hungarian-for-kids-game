/**
 * @jest-environment jsdom
 */

const { cards, shuffledCards} = require('../script.js');
let cardContainer = document.getElementById("card-container"); // Declare container variable in the outer scope

beforeEach(() => {
    let fs = require('fs');
    let fileContents = fs.readFileSync('game.html', 'utf-8');
    document.open();
    document.write(fileContents);
    document.close();
  });

describe('Game rendering', () => {
    test('renders all cards in the game area', () => {
  
      // Call the function that renders the cards
      shuffledCards.forEach((card) => {
        const cardHTML = `
          <div class="memory-card col-xl-1 col-lg-2 col-3 mb-1 m-lg-2" data-frame="image">
            <img class="front-face d-none" src="${card.src}" alt="front of card"/>
            <img class="back-face" src="assets/images/card-back.webp" alt="back of card"/>
            <audio id="${card.id}"><source src="${card.audioSrc}" type="audio/mpeg">
            Your browser does not support the audio element.</audio>
          </div>
        `;
        container.innerHTML += cardHTML; // Use the container variable
      });
  
      // Assert that all cards are present in the DOM
      expect(container.querySelectorAll('.memory-card').length).toBe(cards.length);
    });
  });