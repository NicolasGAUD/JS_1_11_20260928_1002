const billyTheCat  = {
  name : "Billy",
  color : "roux",          
  favouriteFoods : ["thon", "croquettes"],   
  isHungry : true,
  meow : function () {                     
    console.log("Miaaaou");
  },
  feed : function () {     
	if (!this.isHungry){
		console.log("Billy n'a pas faim.");
	}
	else{
		this.isHungry = false;
		console.log("Billy mange.");
	}
  },  
};

console.log(billyTheCat.favouriteFoods[1]);
billyTheCat.meow();

const choice = "color";
console.log(billyTheCat[choice]);

billyTheCat.colr = "noir"; // nouvel attribut
console.log(billyTheCat);

const animals = [
  { name: "Billy", species: "chat", sound: "Miaou" },
  { name: "Rex", species: "chien", sound: "Wouf" },
  { name: "Coco", species: "perroquet", sound: "Coco !" },
];

// for (let i = 0; i < animals.length; i++){
	// console.log(animals[i].name + " dit " + animals[i].sound);
// }

for (const animal of animals) {
  console.log(`${animal.name} dit ${animal.sound}`);
}

billyTheCat.feed();
billyTheCat.feed();

const sameCat = billyTheCat;
sameCat.isHungry = true;
billyTheCat.feed();