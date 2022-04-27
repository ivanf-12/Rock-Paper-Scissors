let arr=["Rock", "Paper", "Scissors"];

function hasil(a, b){
	if(a==0){
		if(b==0){
			return 0;
		}
		else if(b==1){
			return 2;
		}
		else{
			return 1;
		}
	}
	else if(a==1){
		if(b==0){
			return 1;
		}
		else if(b==1){
			return 0;
		}
		else{
			return 2;
		}
	}
	else{
		if(b==0){
			return 2;
		}
		else if(b==1){
			return 1;
		}
		else{
			return 0;
		}
	}
}

function ubah(pilihan){
	pilihan=pilihan.toLowerCase();
	if(pilihan[0]=='r'){
		return 0;
	}
	else if(pilihan[0]=='p'){
		return 1;
	}
	else{
		return 2;
	}
}

function computerPlay(){
	let angka=Math.floor(Math.random()*3);
	return angka;
}

function playRound(playerSelection, computerSelection){
	let result=hasil(playerSelection, computerSelection);
	if(result==0){
		return "Draw!";
	}
	else if(result==1){
		return `You Win! ${arr[playerSelection]} beats ${arr[computerSelection]}.`;
	}
	else{
		return `You Lose! ${arr[computerSelection]} beats ${arr[playerSelection]}.`;
	}
}

function game(){
	let playerScore=0, computerScore=0;
	for(let i=1;i<=5;++i){
		let playerSelection=ubah(prompt("Please Enter `Rock, Paper, or Scissors`"));
		let computerSelection=computerPlay(); 
		let result=playRound(playerSelection, computerSelection);
		console.log(result);
		if(result[4]=='W'){
			playerScore++;
		}
		else if(result[4]=='L'){
			computerScore++;
		}
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
