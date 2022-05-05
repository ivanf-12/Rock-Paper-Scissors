let playerScore=0, computerScore=0;
let arr=["ROCK", "PAPER", "SCISSORS"];

function hasil(a, b){
	if(a=="ROCK"){
    if(b=="ROCK") return 0;
    else if(b=="PAPER") return 2;
    else return 1;
  }
  else if(a=="PAPER"){
    if(b=="ROCK") return 1;
    else if(b=="PAPER") return 0;
    else return 2;
  }
  else{
    if(b=="ROCK") return 2;
    else if(b=="PAPER") return 1;
    else return 0;
  }
}

function ubah(pilihan){
	return pilihan.toUpperCase();
}

function computerPlay(){
	let angka=Math.floor(Math.random()*3);
	return arr[angka];
}

function playRound(playerSelection, computerSelection){
	let result=hasil(playerSelection, computerSelection);
	if(result==0){
		return "Draw!";
	}
	else if(result==1){
		playerScore++;
    return `You Win! ${playerSelection} beats ${computerSelection}.`;
	}
	else{
    computerScore++;
		return `You Lose! ${computerSelection} beats ${playerSelection}.`;
	}
}

function game(){
	for(let i=1;i<=5;++i){
		let playerSelection=ubah(prompt("Please Enter `Rock, Paper, or Scissors`"));
		let computerSelection=computerPlay(); 
		let result=playRound(playerSelection, computerSelection);
		console.log(result);
	}
	if(playerScore > computerScore){
		return "Congrats! You Won This Round!";
	}
	else if(playerScore == computerScore){
		return "This Round Result is Draw!";
	}
	else{
		return "Sorry, You Lost this Round.";
	}
}


console.log(game());
