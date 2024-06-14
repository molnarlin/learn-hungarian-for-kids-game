const cards = document.querySelectorAll('.game-cards')

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard(){
    if(lockBoard) return;
    if(this === firstCard) return;
    
    this.classList.toggle('flip');

    if(!hasFlippedCard)
    {
        //First Card Click
        hasFlippedCard = true
        firstCard = this

        return;
    }

    //Second Card Click
    secondCard = this

    checkIfMatch()
}

function checkIfMatch(){

        let isMatch = firstCard.dataset.match === secondCard.dataset.match;
        
        isMatch ? disableCards() : unflipCards();
}

function disableCards(){
    firstCard.removeEventListener('click', flipCard)
    secondCard.removeEventListener('click', flipCard)

    resetBoard()
}

function unflipCards(){
    lockBoard = true;
    
    setTimeout( () => {
        firstCard.classList.remove('flip')
        secondCard.classList.remove('flip')
        lockBoard = false;
        resetBoard()
    }, 1500)
}

function resetBoard(){
    hasFlippedCard = false;
    lockBoard = false;
    firstCard = null;
    secondCard = null;
}

/**This function executes immediately after its definition
 * because it is wrapped in a parenthesis and 
 * has an extra pair of parenthesis at its end.
 */
(function shuffle(){
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 20)
        card.style.order = randomPos;
    });
})();

cards.forEach(card => card.addEventListener('click', flipCard))

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

function waitForClick(){
    return new Promise(resolve => {
        const element = document.getElementById("startButton");
        const handler = () => {
            element.removeEventListener("click", handler);
            resolve();
        };
        element.addEventListener("click", handler);
    });
}

async function startGame(){
    await waitForClick();
}

startGame();
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