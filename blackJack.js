let chips = 100
let cards = []
let d_cards=[]
let sum = 0
let d_sum=0
let turn=0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")
let playerEl = document.getElementById("player-el")
let newCardBtnEl = document.getElementById("new-btn").style.visibility = "hidden"
let restartBtnEl = document.getElementById("restart-btn").style.visibility = "hidden"
let startBtnEl = document.getElementById("start-btn")
let chipsEl = document.getElementById('chips-el')
let standBtnEl= document.getElementById("stand-btn").style.visibility="hidden"
let dealerCardsEl=document.querySelector("#dealerCards-el")
let dealerSumEl=document.querySelector("#dealerSum-el")

function getRandCard() {
    let randNumber = Math.floor(Math.random() * 12 + 1)
    if (randNumber > 10) {
        return 10
    } else if (randNumber === 1) {
        return 11
    } else {
        return randNumber
    }
}
function startGame() {
    if (isAlive === false) {
        isAlive = true
        if (isAlive) {
            document.getElementById("start-btn").style.visibility = "hidden"
            newCardBtnEl = document.getElementById("new-btn").style.visibility = "visible"
            restartBtnEl = document.getElementById("restart-btn").style.visibility = "visible"
            standBtnEl = document.getElementById("stand-btn").style.visibility = "visible"
            sumEl.textContent = document.getElementById("sum-el").style.visibility="visible"
            cardsEl.textContent =document.getElementById("cards-el").style.visibility="visible"
        }
        let first = getRandCard()
        let second = getRandCard()
        let d_first=getRandCard()
        let d_second=getRandCard()
        cards = [first, second]
        d_cards=[d_first,d_second]
        sum = first + second
        d_sum=d_first+d_second
        renderGame()
    } else {
        messageEl.textContent = "Please Restart the Game "
    }
}
function restartGame() {
    hasBlackJack = false
    isAlive = false
    messageEl.textContent = "Do you want to Start?"
    document.getElementById("start-btn").style.visibility = "visible"
    newCardBtnEl = document.getElementById("new-btn").style.visibility = "hidden"
    restartBtnEl = document.getElementById("restart-btn").style.visibility = "hidden"
    standBtnEl = document.getElementById("stand-btn").style.visibility = "hidden"
    turn=0
}
function renderGame() {
    cardsEl.textContent = "Your Current Cards:"
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " - "
    }
    if (sum < 21  && d_sum <21) {
        message = "Do you want to draw another Card?"
    } else if (sum === 21 && d_sum!=21) {
        message = "You've got Black Jack!"
        chips += 25
        hasBlackJack = true
    } else if( sum>21 && d_sum<=21) {
        message = "You've lost the game"
        if (chips - 25 < 0) {
            message = "You are out of chips,Please refresh the page to get more chips"
        }
        else {
            chips -= 25
        }
        isAlive = false
    } else if(sum!=21 && d_sum===21){
        message="Dealer got BlackJack!"
        if (chips - 25 < 0) {
            message = "You are out of chips,Please refresh the page to get more chips"
        }
        else {
            chips -= 25
        }
        isAlive=false
    } else if(sum>21 && d_sum>21){
        message="Push"
        isAlive=false
    }else if(sum<21 && d_sum>21){
        message="Dealer lost the game!"
        chips += 25
        isAlive=false
    }
    showDealerSum()
    messageEl.textContent = message
    sumEl.textContent = "Your Current Sum: " + sum
    chipsEl.textContent = "Your Chips: " + chips
}
function showDealerSum(){
    dealerSumEl.textContent="Dealer's Sum: " + d_sum
    dealerCardsEl.textContent="Dealer's Cards:"
    for (let i = 0; i < cards.length; i++) {
        dealerCardsEl.textContent += d_cards[i] + " - "
    }
} 
function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        stand()
        let newCard = getRandCard()
        sum += newCard
        cards.push(newCard)
        renderGame()
    }
}
function stand(){
    if (isAlive === true && hasBlackJack === false && turn<1){
    let d_newCard =getRandCard()
    d_sum +=d_newCard
    d_cards.push(d_newCard)
    renderGame()
    turn+=1
    console.log(turn)
    showDealerSum()
    }
    else{
        messageEl.textContent="Can't Stand again"
    }
}




