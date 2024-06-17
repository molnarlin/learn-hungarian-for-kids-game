const cards = [
	{id: 'one', src: 'assets/images/one.jpg', audioSrc: 'assets/Audio/one.m4a'},
	{id: 'one', src: 'assets/images/one.jpg', audioSrc: 'assets/Audio/one.m4a'},
	{id: 'two', src: 'assets/images/two.jpg', audioSrc: 'assets/Audio/two.m4a'},
	{id: 'two', src: 'assets/images/two.jpg', audioSrc: 'assets/Audio/two.m4a'},
	{id: 'three', src: 'assets/images/three.jpg', audioSrc: 'assets/Audio/three.m4a'},
	{id: 'three', src: 'assets/images/three.jpg', audioSrc: 'assets/Audio/three.m4a'},
	{id: 'four', src: 'assets/images/four.jpg', audioSrc: 'assets/Audio/four.m4a'},
	{id: 'four', src: 'assets/images/four.jpg', audioSrc: 'assets/Audio/four.m4a'},
	{id: 'five', src: 'assets/images/five.jpg', audioSrc: 'assets/Audio/five.m4a'},
	{id: 'five', src: 'assets/images/five.jpg', audioSrc: 'assets/Audio/five.m4a'},
	{id: 'six', src: 'assets/images/six.jpg', audioSrc: 'assets/Audio/six.m4a'},
	{id: 'six', src: 'assets/images/six.jpg', audioSrc: 'assets/Audio/six.m4a'},
	{id: 'seven', src: 'assets/images/seven.jpg', audioSrc: 'assets/Audio/seven.m4a'},
	{id: 'seven', src: 'assets/images/seven.jpg', audioSrc: 'assets/Audio/seven.m4a'},
	{id: 'eight', src: 'assets/images/eight.jpg', audioSrc: 'assets/Audio/eight.m4a'},
	{id: 'eight', src: 'assets/images/eight.jpg', audioSrc: 'assets/Audio/eight.m4a'},
	{id: 'nine', src: 'assets/images/nine.jpg', audioSrc: 'assets/Audio/nine.m4a'},
	{id: 'nine', src: 'assets/images/nine.jpg', audioSrc: 'assets/Audio/nine.m4a'},
	{id: 'zero', src: 'assets/images/zero.jpg', audioSrc: 'assets/Audio/zero.m4a'},
	{id: 'zero', src: 'assets/images/zero.jpg', audioSrc: 'assets/Audio/zero.m4a'},
];

cards.forEach((card)=> {
	const cardHTML = `
	<div class="memory-card col-1 offset-1 m-2" data-frame="image">
	<img class="front-face d-none" src="${card.src}" alt="front of card"/>
	<img class="back-face" src="assets/images/card-back.jpg" alt="back of card"/>
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
 }

function play(id) {
    var audio = document.getElementById(id);
    if (audio.paused){
       audio.play();
    } else {
       audio.pause();
   }
} 
