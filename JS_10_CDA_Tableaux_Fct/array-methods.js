// const guests = ["Camille", "Sofia", "Malik", "Nour"];
// console.log(guests.includes("Camille")); // true 
// console.log(guests.indexOf("Malik")); // 2
// console.log(guests.includes("Bob")); // false
// console.log(guests.indexOf("Bob")); // -1
// console.log(guests.join(", ")); // Camille, Sofia, Malik, Nour
// console.log("G_R_E_T_A".split("_").join(" ")); // G R E T A

// const podium = ["Camille", "Sofia", "Malik", "Nour"];
// const excerpt = podium.slice(1, 3);
// console.log(excerpt);
// console.log(podium); 

// const podium2 = ["Camille", "Sofia", "Malik", "Nour"];
// const removed = podium2.splice(1, 2);
// console.log(removed);
// console.log(podium2);

				// Le 1er nombre		Le 2e nombre					Le tableau d'origine
// slice(1, 3)		l'index de départ	l'index où s'arrêter, exclu		intact
// splice(1, 2)	l'index de départ	combien d'éléments retirer		modifié


// splice sait aussi insérer. Ses arguments, dans l'ordre : à partir d'où, combien en retirer, et quoi mettre à la place.
// const letters = ["a", "b", "XX", "YY", "e"];
// letters.splice(2, 2, "c", "d");
// console.log(letters);   // ["a", "b", "c", "d", "e"]

// const scores = [1, 2, 3];
// scores.reverse();
//    // [3, 2, 1]

// const weddingGuests = ["Camille", "Sofia", "Malik", "Nour", "Bob", "Léa"];
//range les trois premiers dans honorTable, sans modifier weddingGuests, et affiche les deux tableaux ;
// const honorTable = weddingGuests.slice(0,3);
// console.log(weddingGuests);
// console.log(honorTable);

// retire "Malik" et "Nour" de weddingGuests, et affiche ce qui a été retiré ;
// const removed = weddingGuests.splice(2,2);
// console.log(weddingGuests);
// console.log(removed);

//insère "Inès" en deuxième position, sans rien retirer.
// weddingGuests[1] = "Inès"
// console.log(weddingGuests);

// const grades = [12, 5, 20, 8, 15];
// trie-les dans l'ordre croissant ;
// grades.sort((a, b) => a - b);
// console.log(grades);

// trie-les dans l'ordre décroissant ;
// grades.sort((a, b) => b - a);
// console.log(grades);

const results = [12, 5, 20, 8, 15];
const sorted = results.slice(0, results.length);
sorted.sort((a, b) => b - a);
console.log(results);
console.log(sorted);
for (let i = 0; i < 3; i++){
	console.log(sorted[i]);
}