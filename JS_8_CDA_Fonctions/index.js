// function sayHello(firstName = "voyageur") {  
	// console.log("Salut " + firstName + " !");
// }
// sayHello();            // Salut voyageur !
// sayHello("Camille");   // Salut Camille !


// function introduce (firstName, city = "Tours"){
	// console.log(firstName + " vient de " + city);	
// }
// introduce("Camille", "Tours");
// introduce("Malik", "Lyon");
// introduce("Sofia", "Nantes");
// introduce("Billy");

// function isAdult(age){
	// if (age >= 18){
		// return true;
	// }else{
		// return false;
	// }
// }
// console.log(isAdult(17));
// console.log(isAdult(18));
// console.log(isAdult(42));
// if (isAdult(18)) {console.log("OK")};

// function formatFullName(firstName, lastName){
	// return firstName + " " + lastName;
// }
// console.log(formatFullName("Camille", "Dubois"));

// const formatFullName = (firstName, lastName) => {
  // return firstName + " " + lastName;
// };
// console.log(formatFullName("Camille", "Dubois"));


/* /!\ " ` " /!\ */
const formatFullName = (firstName, lastName) => `${firstName} ${lastName}`;
console.log(formatFullName("Camille", "Dubois"));