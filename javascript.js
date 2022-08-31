function getComputerChoice(){
    let random_Number_generator = Math.floor(Math.random()*3);
    if(random_Number_generator===0){
        return "rock";
    }else if(random_Number_generator===1){
        return "paper";
    }else{
        return "scissors";
    }
}

function playRound(playerSelection,computerSelection){
    if(playerSelection.toLowerCase() === computerSelection){
        return "It's a Draw!";
    }else if(playerSelection.toLowerCase() === "rock" && computerSelection === "paper"){
        return "You Lose! Paper beats Rock!";
    }else if(playerSelection.toLowerCase() === "rock" && computerSelection === "scissors"){
        return "You Win! Rock beats Scissors!";
    }else if(playerSelection.toLowerCase() === "paper" && computerSelection === "rock"){
        return "You Win! Paper beats Rock!";
    }else if(playerSelection.toLowerCase() === "paper" && computerSelection === "scissors"){
        return "You Lose! Scissors beat Paper!";
    }else if(playerSelection.toLowerCase() === "scissors" && computerSelection === "rock"){
        return "You Lose! Rock beats Scissors!";
    }else if(playerSelection.toLowerCase() === "scissors" && computerSelection === "paper"){
        return "Your Win! Scissors beat Paper!";
    }
}

let win_counter=0,lose_counter=0,playedRounds=0;

function score(result){
    const runningScore = document.getElementById("runningScore");
    playedRounds++;

      if(result.slice(4,7) === "Win"){
        win_counter++;
        
        
        userScore.textContent = `You: ${win_counter}`;
        runningScore.removeChild(userScore);
        runningScore.appendChild(userScore);
        

        return win_counter;
      }else if(result.slice(4,8) === "Lose"){
        lose_counter++;
   
        
        compScore.textContent = `Opponent: ${lose_counter}`;
        runningScore.removeChild(compScore);
        runningScore.appendChild(compScore);
        

        return lose_counter;
      }
}

function announce(){
    if(playedRounds===5){
        if(win_counter > lose_counter){
        
            const announceWinner = document.getElementById("announceWinner");
            const text = document.createElement("h2");
            text.textContent = "You have Won!";
            announceWinner.appendChild(text);
             
        }else if(win_counter < lose_counter){

            const announceWinner = document.getElementById("announceWinner");
            const text = document.createElement("h2");
            text.textContent = "You Lost!";
            announceWinner.appendChild(text);
            
        }else if(win_counter === lose_counter){

            const announceWinner = document.getElementById("announceWinner");
            const text = document.createElement("h2");
            text.textContent = "It's a Draw!";
            announceWinner.appendChild(text);
           
        }
        win_counter = 0;
        lose_counter = 0;
        playedRounds = 0;
    }
}

function eraseAnnouncement(){
    const announceWinner = document.getElementById("announceWinner");
    if(announceWinner.firstChild){
    announceWinner.removeChild(announceWinner.firstElementChild);
    }
}



//TO HTML

const userScore = document.createElement('p');
userScore.textContent = `You: ${win_counter}`;
runningScore.appendChild(userScore);


const compScore = document.createElement('p');
compScore.textContent = `Opponent: ${lose_counter}`;
runningScore.appendChild(compScore);



const btnRock = document.querySelector("#rock");
btnRock.addEventListener('click', () => {
  let result = playRound('rock',getComputerChoice());
  console.log(result);

  eraseAnnouncement(); //Removes Announcement Texts
  
  const showResult = document.querySelector('#results');
  const displayResultText = document.createElement('p');
  displayResultText.textContent = result;
  if(showResult.lastElementChild){
  showResult.removeChild(showResult.lastElementChild);  //Removes the last text
  } 
  showResult.appendChild(displayResultText);  //Adds the new result text
  score(result);  //Updates the scoreboard
  announce(); //announces winner after every five rounds
  

});

const btnPaper = document.querySelector("#paper");
btnPaper.addEventListener('click', () => {
  let result = playRound('paper',getComputerChoice());
  console.log(result);

  eraseAnnouncement(); //Removes Announcement Texts

  const showResult = document.querySelector('#results');
  const displayResultText = document.createElement('p');
  displayResultText.textContent = result;
  if(showResult.lastElementChild){
  showResult.removeChild(showResult.lastElementChild);  //Removes the last text
  } 
  showResult.appendChild(displayResultText);  //Adds the new result text
  score(result); //Updates the scoreboard
  announce(); //announces winner after every five rounds
  
  
});

const btnScissors = document.querySelector("#scissors");
btnScissors.addEventListener('click', () => {
  let result = playRound('scissors',getComputerChoice());
  console.log(result);

  eraseAnnouncement(); //Removes Announcement Texts

  const showResult = document.querySelector('#results');
  const displayResultText = document.createElement('p');
  displayResultText.textContent = result;
  if(showResult.lastElementChild){
  showResult.removeChild(showResult.lastElementChild);  //Removes the last text
  } 
  showResult.appendChild(displayResultText);  //Adds the new result text
  score(result); //Updates the scoreboard
  announce(); //announces winner after every five rounds
  
  
});
