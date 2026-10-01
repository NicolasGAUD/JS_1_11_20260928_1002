const foodTruck  = {
	address : {city : "Tours"},
	isOpen : false,
	menu : ["tacos", "quesadilla"],
	open : function () { 
	if (this.isOpen){
		console.log("Tacos Loco est déjà ouvert.");
	}
	else{
		this.isOpen = true;
		console.log("Tacos Loco ouvre, 2 plats au menu !");
		}	
	},
	addDish : function (dish) {     
		this.menu.push(dish);
	},  
};

console.log(foodTruck.address.city);
// Tours

foodTruck.open();
// Tacos Loco ouvre, 2 plats au menu !

foodTruck.addDish("burrito");

foodTruck.open();
// Tacos Loco est déjà ouvert.

console.log(foodTruck.menu);
// [ 'tacos', 'quesadilla', 'burrito' ]

const backup = foodTruck;
backup.menu.pop();
console.log(foodTruck.menu);