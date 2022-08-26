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

