if(document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

let score = [0, 0];
let playerScore = score[0];
let computerScore = score[1];
const playerOptns = ['rock', 'paper', 'scissors']
const computerOptns = ['rock', 'paper', 'scissors']
let playerCurrentHand = playerOptns[1];
let computerCurrentHand = computerOptns[0];

function ready(){
    
    let choiceBtn = document.getElementsByClassName('btn');
    for(let i = 0; i < choiceBtn.length; i++){
        let button = choiceBtn[i];
        button.addEventListener('click', changeHands);
    }

    let resetBtn = document.getElementsByClassName('reset');
    for(let j = 0; j < resetBtn.length; j++){
        let resetButton = resetBtn[j];
        resetButton.addEventListener('click', resetEverything);
    }
}

function changeHands(event){
    let buttonClicked = event.target;
   
   animation()
   setTimeout(()=>{

    
    if(buttonClicked.classList.contains('rock')){
        changeToRock();
    } else if(buttonClicked.classList.contains('paper')){
        changeToPaper();
    } else if(buttonClicked.classList.contains('scissors')){
        changeToScissors();
    }
    computerRandom()

}, 2000)
}

function changeToPaper(){
    document.getElementById('hand1').src="Assets/paper.png";
    playerCurrentHand = 'paper';
  
}

function changeToRock(){
    document.getElementById('hand1').src="Assets/rock.png";
    playerCurrentHand = 'rock';
   
}

function changeToScissors(){
    document.getElementById('hand1').src="Assets/scissors.png";
    playerCurrentHand = 'scissors';
   
}

function computerRandom(){
    let number = Math.round(Math.random()*2)
    if(number== 0){
        document.getElementById('hand2').src="Assets/paper.png";
        computerCurrentHand = 'paper';
    } else if(number==1){
        document.getElementById('hand2').src="Assets/rock.png";
        computerCurrentHand = 'rock';
    } else {
        document.getElementById('hand2').src="Assets/scissors.png"
        computerCurrentHand= 'scissors';
    }
    
    compareWinner();
}

function compareWinner(){
    if(playerCurrentHand=='paper' && computerCurrentHand =='scissors'){
        computerWins();
       
    } else if(playerCurrentHand=='paper' && computerCurrentHand=='rock'){
        playerWins();
       
    } else if(playerCurrentHand=='scissors' && computerCurrentHand=='rock'){
        computerWins();
        
    } else if (playerCurrentHand=='scissors' && computerCurrentHand=='paper'){
        playerWins();
       
    } else if(playerCurrentHand=='rock' && computerCurrentHand=='scissors'){
        playerWins();
      
    } else if(playerCurrentHand=='rock' && computerCurrentHand=='paper'){
        computerWins();
      
    } else {
        tied()
    }
}

let celebrationText = document.querySelector('.winner');

function computerWins(){
    computerScore++;
    score[1] = computerScore;
  
    celebrationText.textContent = "Computer Wins";
    document.getElementsByClassName('comp-score')[0].textContent = computerScore;
    scoreCheck();
}

function playerWins() {
    playerScore++;
    score[0] = playerScore;
    let celebrationText = document.querySelector('.winner');
    celebrationText.textContent = "Player Wins";
    document.getElementsByClassName('play-score')[0].textContent = playerScore;
    scoreCheck();
}

function tied(){
    let celebrationText = document.querySelector('.winner');
    celebrationText.textContent = "No Winner";
}

function scoreCheck(){
    
    let scoreCap = document.getElementsByClassName('input-entry')[0].value;
    let activeScoreCap = [scoreCap];
    let standardScoreCap = 10;
    if(scoreCap > 0){
       activeScoreCap[0] = scoreCap;
    } else {
        activeScoreCap[0] = standardScoreCap;
    }

    if(score[0] >= activeScoreCap){
        celebrationText.textContent = "Player Won the Game!";
        let choiceBtn = document.getElementsByClassName('btn');
    for(let i = 0; i < choiceBtn.length; i++){
        let button = choiceBtn[i];
        button.removeEventListener('click', changeHands);
        }
    } else if(score[1] >= activeScoreCap){
        celebrationText.textContent = "Computer Won the Game!";
        let choiceBtn = document.getElementsByClassName('btn');
    for (let i = 0; i < choiceBtn.length; i++){
        let button = choiceBtn[i];
        button.removeEventListener('click', changeHands);
     }
    }
    
}

function resetEverything(event){
    let resetButtonClicked = event.target;
    window.location.reload();
}

function animation(){
    document.getElementById('hand1').src="Assets/rock.png";
    document.getElementById('hand2').src="Assets/rock.png";
    document.getElementById('hand1').style.animation = "shakePlayer 2s ease"; //animations called
    document.getElementById('hand2').style.animation = "shakeComputer 2s ease";
    document.getElementById('hand1').addEventListener('animationend', function(){
        this.style.animation = '';
    })
    document.getElementById('hand2').addEventListener('animationend', function(){
        this.style.animation = '';
    })
}

function test(){

}