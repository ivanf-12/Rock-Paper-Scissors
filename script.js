let playerScore=0, computerScore=0, computerSelection, playerSelection;
let arr=["ROCK", "PAPER", "SCISSORS"];
const buttons = document.querySelectorAll(".rps");
const player = document.querySelector("#player")
const computer = document.querySelector("#computer");
const result_text = document.querySelector("#result_text");
const result_paragraph = document.querySelector("#result_paragraph");
const player_status = document.querySelector("#player_status");
const computer_status = document.querySelector("#computer_status");
const overlay = document.querySelector(".overlay");
const restart = document.querySelector("#notif-button");
const notif_box = document.querySelector(".notif");
const notif_text = document.querySelector("#notif-text");
player.textContent = "Player : 0";
computer.textContent = "Computer : 0";

buttons.forEach((button) => {
  button.myParam=button.id;
  button.addEventListener('click', playRound);
});

restart.addEventListener('click', ()=>{
  overlay.classList.remove("active");
  game();
});

function gambar(jenis) {
  if(jenis == "ROCK"){
    return "✊";
  }
  else if(jenis == "PAPER"){
    return "✋";
  }
  else{
    return "✌";
  }
}

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

function playRound(e){
  let returns, returnss;
  playerSelection = e.currentTarget.myParam;
  computerSelection = computerPlay();
  player_status.textContent = gambar(playerSelection);
  computer_status.textContent = gambar(computerSelection);
	let result=hasil(playerSelection, computerSelection);
	if(result==0){
		returns = "Draw!";
    returnss = "Choose Again!";
	}
	else if(result==1){
    player.textContent = `Player : ${++playerScore}`;
    returns = `You Win!`;
	  returnss = `${playerSelection} beats ${computerSelection}.`;
  }
	else{
    computer.textContent = `Computer : ${++computerScore}`;
		returns = `You Lose!`;
    returnss = `${computerSelection} beats ${playerSelection}.`;
	}
  result_text.textContent = returns;
  result_paragraph.textContent = returnss;
  if(playerScore == 5 || computerScore == 5){
    if(playerScore > computerScore){
      notif_text.textContent = "You Won!";
    }
    else{
      notif_text.textContent = "You Lost.";
    }
    notif_box.classList.add("notiff");
    overlay.classList.add("active");
  }
}

function game(){
  let result;
  computerScore = 0;
  playerScore = 0;
  player.textContent = `Player : ${0}`;
  computer.textContent = `Computer : ${0}`;
  result_text.textContent = "Choose One!";
  result_paragraph.textContent = "First to score 5 points wins the game.";
  player_status.textContent = "👤";
  computer_status.textContent = "🖥";
  notif_box.classList.remove("notiff");
  return result;
}