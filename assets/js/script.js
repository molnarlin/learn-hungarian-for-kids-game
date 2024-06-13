const gridContainer = document.querySelector(".grid-container");
let game_cards=[];

let firstCard, secondCard;
let lockBoard = false;

fetch("cards.js")
    .then((data) => {
        game_cards = [...data, ...data];
        shuffleCards();
        generateCards();
    });

function shuffleCards(){
    let currentIndex = game_cards.length,
    randomIndex,
    temporaryValue;
 while(currentIndex !== 0){
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = game_cards[currentIndex];
    game_cards[currentIndex] = game_cards[randomIndex];
    game_cards[randomIndex] = temporaryValue;
 }
}

function generateCards(){
    for(let game_card of game_cards){
        const cardElement = document.createElement("div");
        cardElement.classList.add("game_card");
        cardElement.setAttribute("data-name". game_card.name);
        cardElement.innerHTML = `
        <div class="front">
        <img class="front-image src=${game_card.image} />
        </div>
        <div class="back"></div>`;
        gridContainer.appendChild(cardElement);
        cardElement.addEventListener("click", flipCard);
    }
}

function flipCard(){
    if(lockBoard) return;
    if(this === firstCard) return;

    this.classList.add("flipped");

    if(!firstCard) {
        firstCard = this;
        return;
    }

    secondCard = this;
    lockBoard = true;

    checkForMatch();
}

function checkForMatch(){
    let isMatch = firstCard.dataset.name === secondCard.dataset.name;

    isMatch ? disableCards() : unflipCards();
}

function disableCards(){
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);

    resetBoard();
}

function unflipCards(){
    setTimeout(() => {
        firstCard.classList.remove("flipped");
        secondCard.classList.remove("flipped");
        resetBoard();
    }, 1000);
}

function resetBoard(){
    firstCard = null;
    secondCard = null;
    lockBoard = false;
}

function restart(){
    resetBoard();
    shuffleCards();
    gridContainer.innerHTML = "";
    generateCards();
}

/*progress bar from W3 School*/

var i = 0;
function move(){
    if (i == 0){
        i = 1;
        var elem = document.getElementById("myBar");
        var width = 1;
        var id = setInterval(frame, 10);
        function frame(){
            if (width >= 100){
                clearInterval(id);
                i = 0;
            } else {
                width++;
                elem.style.width = width + "%";
            }
        }
    }
}