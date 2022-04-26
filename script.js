function computerPlay(){
	let angka=Math.floor(Math.random()*3);
	let arr=["Rock", "Paper", "Scissors"];
	return arr[angka];
}