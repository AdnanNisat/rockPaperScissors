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

function game(){
    let win_counter=0,lose_counter=0;
    for(let i=1; i<=5; i++){
      let playerSelection = prompt("Rock, Paper or Scissors?");
      let computerSelection = getComputerChoice();
      let result = playRound(playerSelection,computerSelection);

      if(result.slice(4,7) === "Win"){
        win_counter++;
      }else if(result.slice(4,8) === "Lose"){
        lose_counter++;
      }
    }

    if(win_counter > lose_counter){
        return "You are the winner!";
    }else if(win_counter < lose_counter){
        return "You lost!";
    }else if(win_counter === lose_counter){
        return "It's a Draw!";
    }
}
