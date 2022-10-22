//asks for your age
const age = parseInt(prompt("How old are you? "));
let old = false
//checks your age
if (age === 0) {
    alert("Please insert age")
    location.reload();
} else if (age > 99) {
    var audio = new Audio('devil.mp3');
    audio.play();
    alert("...sure you are....")
    old = true
} else if (age >= 18) {
    var audio = new Audio('summer.mp3');
    audio.play();
    alert("Welcome to Ahmed's halal gambling game!")
    old = true
    
} else if (age < 18) {
    var audio = new Audio('shark.mp3');
    audio.play();
    alert("Too young try agian when your ummm little older")
    old = false
} else{
    alert("please insert your age.")
    location.reload();
}


//randomizes the two first cards
let firstCard = Math.floor(Math.random() * (11 - 2 + 1)) + 2;
let secondCard = Math.floor(Math.random() * (11 - 2 + 1)) + 2;
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let isAlive = true
let hasBlack = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEL = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")





function startGame(){
    playGame() 
    if (hasBlack === true){
        location.reload();
    }
}


//checks of you win or lose
function playGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }

    sumEL.textContent = "Sum: " + sum
    if (sum <= 20) {
        if (old === false){ alert("TOO YOUNG! go play fornite or touch grass") 
        location.reload(); } else { null 
        } 
        message = ("Do you want to draw a new card?")
        
    } else if (sum === 21) {
        if (old === false){
            alert("TOO YOUNG! go play fornite or touch grass")
            location.reload();
        } else {
            null
        }
        var audio = new Audio('money.mp3');
        audio.play();
        message = ("you've got Blackjack!")
        hasBlack = true
    
    } else {
        if (old === false){
            alert("TOO YOUNG! go play fornite or touch grass")
            location.reload();
        } else {null }
        message = ("you lost!")
        isAlive = false
    } 
    messageEl.textContent = message
}
    
function newCard() {
    if (isAlive === false){
        alert("You have lost, lets try agian.")
        location.reload();
    }
    if (isAlive === true && hasBlack === false){
        let anotherCard = Math.floor(Math.random() * (11 - 2 + 1)) + 2;
        sum  += anotherCard
        cards.push(anotherCard)
        playGame()
    } else if (hasBlack === true) {
        alert("You Win! if you wish to replay press the 'START GAME' button.")
    }
}


