// function changeMessage(fisrtName, qty, unitPrice, paid){
	// let result = paid - (qty * unitPrice);
	// const message = result > 0 ? "on lui rend" : "il manque"
	// result = Math.abs(result);
	// return `${fisrtName} paie ${paid} € pour ${qty} tacos à ${unitPrice} €, ${message} ${result} €`
// }

const changeMessage = (fisrtName, qty, unitPrice, paid) => {
	let result = paid - (qty * unitPrice);
	const message = result > 0 ? "on lui rend" : "il manque"
	result = Math.abs(result);
	return `${fisrtName} paie ${paid} € pour ${qty} tacos à ${unitPrice} €, ${message} ${result} €`
};


console.log(changeMessage("Camille", 3, 8, 25));
// Camille paie 25 € pour 3 tacos à 8 €, on lui rend 1 €.
console.log(changeMessage("Malik", 2, 8, 20));
// Malik paie 20 € pour 2 tacos à 8 €, on lui rend 4 €.
console.log(changeMessage("Sofia", 2, 8, 10));
// Sofia paie 10 € pour 2 tacos à 8 €, il manque 6 €.