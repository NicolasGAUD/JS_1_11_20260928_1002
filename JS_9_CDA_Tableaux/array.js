// const pets = ["😺", "🐶", "🐭", "🦊"];

// Tous
// for (let i = 0; i < pets.length; i++){
	// console.log(pets[i]);
// }
// console.log(pets);

// 2 ème only
// console.log(pets[1]);

// Last
// console.log(pets[pets.length - 1]);

// replace
// pets[0] = "🐰"
// for (let i = 0; i < pets.length; i++){
	// console.log(pets[i]);
// }

// =====================================================================

// fruits.push("Banana"); // Add at the end
// fruits.unshift("Strawberry"); // Add at the beginning
// fruits.pop(); // Remove last
// fruits.shift(); // remove first

function readTab(tab){
	for (let i = 0; i < tab.length; i++){
		console.log(tab[i]);
	}
}

const animals = ["Lion", "Monkey", "Tiger"];
console.log(animals);
animals.push("Zebra");
readTab(animals);
console.log("=========================");
animals.unshift("Panda");
readTab(animals);
console.log("=========================");
const last = animals.pop();
console.log(`last : ${last}`);
readTab(animals);
console.log("=========================");
animals.shift();
readTab(animals);