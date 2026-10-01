const mysteriousString = "iu@zfiz)!uzqzf!snoi??alutargnocze&gfuzyafzygfzmgfu%f";
console.log("step 0 : ", mysteriousString);

// step 1 : découpe-la en tableau, une lettre par élément
const step1 = mysteriousString.split(""); 
console.log("step 1 : ", step1);

// step 2 : garde de l'index 15 inclus à l'index 31 exclu
const step2 = step1.splice(15,16); // original modifié
console.log("step 2 : ", step2);

// step 3 : à partir de l'index 4, remplace 2 éléments par la seule lettre "t"
const step3 = step2.slice(); // Création d'une copie du tableau, original non modifié.
step3.splice(4,2,"t");
// for (let i = 4; i < 6; i++){
	// step3[i] = "t"
// }
console.log("step 3 : ", step3);

// step 4 : inverse l'ordre
const step4 = step3.reverse(); // original modifié
console.log("step 4 : ", step4);

// step 5 : recolle tout en une chaîne, sans séparateur
const step5 = step4.join(""); // original non modifié
console.log("step 5 : ", step5);