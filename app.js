let blackJack = false
let stillPlaying = false
let message = ""
let sum = 0
let cards = []
let messagEL = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13 + 1)
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

function startGame() {

    stillPlaying = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        blackJack = true
    } else {
        message = "You're out!"
        stillPlaying = false
    }
    console.log(message)
    messagEL.textContent = message
}

function newCard() {

    if (stillPlaying === true && blackJack === false) {
        console.log("Getting a new card from the deck...")
        let card = getRandomCard()
        sum += card
        cards.push(card)
        console.log(cards)
        renderGame()
    }

}