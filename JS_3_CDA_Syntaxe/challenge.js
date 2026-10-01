let nbBonbons = 17;
let nbAmis = 5;
console.log(nbBonbons % nbAmis);

if (nbBonbons % nbAmis === 0)
{
	console.log(true);
}
else{
	console.log(false);
}

console.log(nbBonbons % nbAmis === "2");
console.log(nbBonbons % nbAmis == "2");

// === compare la valeur mais aussi le type. Ici le resultat de nbBonbons % nbAmis est le nombre 2, pas une chaine de caractères.
