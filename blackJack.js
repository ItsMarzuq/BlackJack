let chips=100
let cards=[]
let sum=0
let hasBlackJack=false
let isAlive= false
let message=""
let messageEl=document.getElementById("message-el")
let sumEl=document.querySelector("#sum-el")
let cardsEl=document.querySelector("#cards-el")
let playerEl=document.getElementById("player-el")
let newCardBtnEl=document.getElementById("new-btn").style.visibility="hidden"
let restartBtnEl=document.getElementById("restart-btn").style.visibility="hidden"
let startBtnEl=document.getElementById("start-btn")
let chipsEl=document.getElementById('chips-el')

function getRandCard(){
        let randNumber =Math.floor(Math.random()*12+1)
        if(randNumber>10){
            return 10
        } else if(randNumber === 1){
            return 11
        } else {
            return randNumber
        }
    // return 10.5
}
function startGame(){
    if(isAlive===false){
    isAlive=true
    if(isAlive){
        document.getElementById("start-btn").style.visibility="hidden"
        newCardBtnEl=document.getElementById("new-btn").style.visibility="visible"
        restartBtnEl=document.getElementById("restart-btn").style.visibility="visible"
        // cardsEl=document.querySelector("#cards-el").style.visibility="visible"
        // sumEl=document.querySelector("#sum-el").style.visibility="visible"
    }
    let first=getRandCard()
    let second=getRandCard()
    cards=[first,second]
    sum=first+second
    renderGame()
    }else{
        messageEl.textContent="Please Restart the Game "
    }
}
function restartGame(){
    isAlive=false
    messageEl.textContent="Do you want to Start?"
    document.getElementById("start-btn").style.visibility="visible"
    newCardBtnEl=document.getElementById("new-btn").style.visibility="hidden"
    restartBtnEl=document.getElementById("restart-btn").style.visibility="hidden"
    // cardsEl=document.querySelector("#cards-el").style.visibility="hidden"
    // sumEl=document.querySelector("#sum-el").style.visibility="hidden"

}
function renderGame(){
    cardsEl.textContent="Your Current Cards:"
    for(let i=0;i<cards.length;i++){
        cardsEl.textContent+=cards[i]+" - "
    }
    if (sum<21){
        message="Do you want to draw another Card?"
    } else if(sum === 21){
        message="You've got Black Jack!"
        chips+=25
        hasBlackJack =true
    } else{
        message="You've lost the game"
        if(chips-25<0){
            message="You are out of chips,Please refresh the page to get more chips"
        }
        else{
        chips-=25
        }
        isAlive=false
    }
    messageEl.textContent=message
    sumEl.textContent="Your Current Sum: "+sum
    chipsEl.textContent="Chips: "+chips
    
}

function newCard(){
    if(isAlive===true && hasBlackJack===false){
    let newCard=getRandCard()
    sum+=newCard
    cards.push(newCard)
    renderGame()
    }
}


