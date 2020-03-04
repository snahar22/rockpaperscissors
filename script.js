const rock = document.getElementById('rock_left');
const paper = document.getElementById('paper_middle');
const scissors = document.getElementById('scissors_right');
const restartGame = document.getElementById('resetGame');
let userScore = document.getElementById('user-score');
let computerScore = document.getElementById('computer-score');
let textChange = document.getElementById('textChange');
let userChoice;
let playerScore = 0;
let compScore = 0;

rock.addEventListener('click', function(){
 userChoice = "rock";
 compareMove();
});

paper.addEventListener('click', function(){
  userChoice = "paper";
  compareMove();
});

scissors.addEventListener('click', function(){
  userChoice = "scissors";
 compareMove();
});

function compareMove(){        
	let compTurn = Math.random();
					if (compTurn < 0.34) {
						compTurn = "rock";
					} else if(compTurn <= 0.67) {
						compTurn = "paper";
					} else {
						compTurn = "scissors";
					}

	 if (userChoice == "rock" && compTurn === "rock"){
      textChange.innerHTML = "We have a tie! " + "</br>" + "The computer chose " + compTurn + "!";
      }
      else if (userChoice == "rock" && compTurn === "paper"){ 
      textChange.innerHTML = "You lost! " + "</br>" +  "The computer chose " +  compTurn + "!";
      compScore++;
  	  }
      else if (userChoice == "rock" && compTurn === "scissors") {
      textChange.innerHTML = "You won! " + "</br>" +  "The computer chose " + compTurn + "!";
      playerScore++;
   	  }
     else if (userChoice == "paper" && compTurn === "paper"){  
      textChange.innerHTML = "We have a tie!  " + "</br>" +  "The chose "  + compTurn + "!";
      }
      else if (userChoice == "paper" && compTurn === "rock") {
      textChange.innerHTML = "You won!" +  "</br>" +  "The computer chose " + compTurn + "!";
      playerScore++;
     }  
      else if (userChoice == "paper" && compTurn === "scissors"){ 
      textChange.innerHTML = "You lost! " + "</br>" +  "The computer chose " + compTurn + "!";
      compScore++;
     }
      else if (userChoice == "scissors" && compTurn === "rock"){   
      textChange.innerHTML = "You lost! " + "</br>" +  "The computer chose " + compTurn + "!";
      compScore++;
     }
      else if (userChoice == "scissors" && compTurn === "paper") { 
      textChange.innerHTML = "You won! " + "</br>" +  "The computer chose " + compTurn + "!";
      playerScore++;
     }
      else if (userChoice == "scissors" && compTurn === "scissors"){
      textChange.innerHTML = "We have a tie! " + "</br>" +  "The computer chose " + compTurn + "!";
     } else {
         textChange.innerHTML = "Please Click An Option Below!";
     } 
 userScore.innerHTML = playerScore;
 computerScore.innerHTML = compScore;  
}

restartGame.addEventListener('click', () => {
 playerScore = 0;
 compScore = 0;
 userScore.innerHTML = playerScore;
 computerScore.innerHTML = compScore;
 textChange.innerHTML = ""; 
});  				