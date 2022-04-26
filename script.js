let arr=["Rock", "Paper", "Scissors"];

function hasil(a, b){
	if(a==0){
		if(b==0){
			return 0;
		}
		else if(b==1){
			return 1;
		}
		else{
			return 2;
		}
	}
	else if(a==1){
		if(b==0){
			return 2;
		}
		else if(b==1){
			return 0;
		}
		else{
			return 1;
		}
	}
	else{
		if(b==0){
			return 1;
		}
		else if(b==1){
			return 2;
		}
		else{
			return 0;
		}
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
		return `You Win! ${arr[playerSelection]} beats ${arr[computerSelection]}`;
	}
	else{
		return `You Lose! ${arr[computerSelection]} beats ${arr[playerSelection]}`;
	}
}