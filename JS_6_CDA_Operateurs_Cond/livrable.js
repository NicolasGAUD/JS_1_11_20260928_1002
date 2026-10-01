// Cas 1 
// let camilleRoll = 2;
// let sofiaRoll = 2;
// let malikRoll = 2;

// Cas 2
// let camilleRoll = 2;
// let sofiaRoll = 2;
// let malikRoll = 1;

//Cas 3
let camilleRoll = 3;
let sofiaRoll = 2;
let malikRoll = 1;

if (camilleRoll === sofiaRoll && sofiaRoll === malikRoll){
	console.log("Les trois joueurs ont fait le même score");
}
else if (camilleRoll === sofiaRoll || sofiaRoll === malikRoll || camilleRoll === malikRoll){
	console.log("Deux joueurs ont fait le même score");	
}
else{
	console.log("Les trois joueurs ont des scores différents");	
}