const cards = [
	{id: 'one', src: 'assets/images/one.webp', audioSrc: 'assets/Audio/One.m4a'},
	{id: 'one', src: 'assets/images/one.webp', audioSrc: 'assets/Audio/One.m4a'},
	{id: 'two', src: 'assets/images/two.webp', audioSrc: 'assets/Audio/Two.m4a'},
	{id: 'two', src: 'assets/images/two.webp', audioSrc: 'assets/Audio/Two.m4a'},
	{id: 'three', src: 'assets/images/three.webp', audioSrc: 'assets/Audio/Three.m4a'},
	{id: 'three', src: 'assets/images/three.webp', audioSrc: 'assets/Audio/Three.m4a'},
	{id: 'four', src: 'assets/images/four.webp', audioSrc: 'assets/Audio/Four.m4a'},
	{id: 'four', src: 'assets/images/four.webp', audioSrc: 'assets/Audio/Four.m4a'},
	{id: 'five', src: 'assets/images/five.webp', audioSrc: 'assets/Audio/Five.m4a'},
	{id: 'five', src: 'assets/images/five.webp', audioSrc: 'assets/Audio/Five.m4a'},
	{id: 'six', src: 'assets/images/six.webp', audioSrc: 'assets/Audio/Six.m4a'},
	{id: 'six', src: 'assets/images/six.webp', audioSrc: 'assets/Audio/Six.m4a'},
	{id: 'seven', src: 'assets/images/seven.webp', audioSrc: 'assets/Audio/Seven.m4a'},
	{id: 'seven', src: 'assets/images/seven.webp', audioSrc: 'assets/Audio/Seven.m4a'},
	{id: 'eight', src: 'assets/images/eight.webp', audioSrc: 'assets/Audio/Eight.m4a'},
	{id: 'eight', src: 'assets/images/eight.webp', audioSrc: 'assets/Audio/Eight.m4a'},
	{id: 'nine', src: 'assets/images/nine.webp', audioSrc: 'assets/Audio/Nine.m4a'},
	{id: 'nine', src: 'assets/images/nine.webp', audioSrc: 'assets/Audio/Nine.m4a'},
	{id: 'zero', src: 'assets/images/zero.webp', audioSrc: 'assets/Audio/Zero.m4a'},
	{id: 'zero', src: 'assets/images/zero.webp', audioSrc: 'assets/Audio/Zero.m4a'},
];

let flippedCards = [];
let matchedCards = [];
let totalCards = cards.length;
let matchedCardsCount = 0;

const shuffledCards= [...cards].sort(() => Math.random() - 0.5);

shuffledCards.forEach((card)=> {
  
	const cardHTML = `
	<div class="memory-card col-xl-1 col-lg-2 col-3 mb-1 m-lg-2" data-frame="image">
	<img class="front-face d-none" src="${card.src}" alt="front of card"/>
	<img class="back-face" src="assets/images/card-back.webp" alt="back of card"/>
	<audio id="${card.id}"><source src="${card.audioSrc}" type="audio/mpeg">Your browser does not support the audio element.</audio>
	</div>
     `;  
     
     document.getElementById('card-container').innerHTML += cardHTML;

});

//Add event listener to the cards
document.querySelectorAll('.memory-card').forEach((card) => {
  card.addEventListener('click', () => {
    flipCard(card);
   });
});

function flipCard(card){
    const frontFace = card.querySelector('.front-face');
    const backFace = card.querySelector('.back-face');
    frontFace.classList.remove('d-none');
    frontFace.classList.add('d-block');
    backFace.classList.add('d-none');
    const audio = card.querySelector('audio');
    audio.play();
    updateProgressBar();

 // Add flipped card to the array
    flippedCards.push(card);

 // Check if two cards are flipped
     if (flippedCards.length === 2) {
 //Check if the cards match.
        if(flippedCards[0].querySelector('audio').id ===flippedCards[1].querySelector('audio').id){
 //If cards match, add them to the flipped cards array
             matchedCards.push(flippedCards[0]);
            matchedCards.push(flippedCards[1]);
            flippedCards = [];
            matchedCardsCount += 2;//Update matched cards count.
	        updateProgressBar(); //Update the progress bar.
       } else {
 // If cards don't match, wait a bit and flip them back.
            setTimeout(() => {
                flippedCards.forEach((card) => {
                    const frontFace = card.querySelector('.front-face');
                    const backFace = card.querySelector('.back-face');
                    frontFace.classList.add('d-none');
                    frontFace.classList.remove('d-block');
                    backFace.classList.remove('d-none');
                });
              flippedCards = [];
            }, 100);
        }
    }
};

function play(id) {
    var audio = document.getElementById(id);
    if (audio.paused){
       audio.play();
    } else {
       audio.pause();
   }
} 


function resetGame(){
    //Remove and add the 'd-block' class and 'd-none' class to all of the cards front and back
        const cards = document.querySelectorAll('.memory-card');
    
      cards.forEach((card) => {
        const frontFace = card.querySelector('.front-face');
        const backFace = card.querySelector('.back-face');
        frontFace.classList.add('d-none');
        frontFace.classList.remove('d-block');
        backFace.classList.remove('d-none');
        backFace.classList.add('d-block');
    });
    
    //Reset the 'flippedCards' and 'matchedCards' arrays
    flippedCards =[];
    matchedCards =[];
     
    // Shuffle the cards again
    shuffleCards();
    matchedCardsCount = 0;
    resetProgressBar();
    }
    
    function shuffleCards (){
    //Shuffle the cards
    const shuffledCards= [...cards].sort(() => Math.random() - 0.5);
    
    //Remove all existing cards from the page
    const cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML = '';
    
    //Re-render the shuffled cards on the page
    shuffledCards.forEach((card)=> {

        const cardHTML = `
        <div class="memory-card col-xl-1 col-lg-2 col-3 mb-1 m-lg-2" data-frame="image">
        <img class="front-face d-none" src="${card.src}" alt="front of card"/>
        <img class="back-face" src="assets/images/card-back.webp" alt="back of card"/>
        <audio id="${card.id}"><source src="${card.audioSrc}" type="audio/mpeg">Your browser does not support the audio element.</audio>
        </div>
         `;
         cardContainer.innerHTML += cardHTML;
    });
    document.querySelectorAll('.memory-card').forEach((card) => {
      card.addEventListener('click', () => {
        flipCard(card);
       });
    });
    resetProgressBar()
    }

    //For the progress-bar
    progressBar = document.querySelector('.progress-bar');

    function resetProgressBar(){
      progressBar.style.width = 0
    };
 
 
    function updateProgressBar() {
        const progressPercentage = ((matchedCardsCount / totalCards) * 100);
    progressBar.style.width = `${progressPercentage}%`;
    };

    exports = {flipCard, cards, matchedCards};
