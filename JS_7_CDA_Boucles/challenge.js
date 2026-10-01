const hiddenMessage = ["X","X","X","X","W","X","E","X","X","X","X","X","L","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","L","X","X","X","X","X","X","X","X","X"," ","X","X","X","X","X","X","X","X","D","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","O","X","X","X","X","X","X","N","X","X","X","X","E","X","X","X","X","X","X","X","X","X","X"," ","X","!","X"];

// for (let i = 0; i < hiddenMessage.length; i++){
	// if (hiddenMessage[i] !== "X"){
		// console.log(hiddenMessage[i]);
		// Écrit directement dans le terminal sans retour à la ligne
        // process.stdout.write(hiddenMessage[i]); 
	// }
// }


// Reconstruire la chaîne de caractères (Plus propre)
let messageFinal = "";

for (let i = 0; i < hiddenMessage.length; i++){
    if (hiddenMessage[i] !== "X"){
        messageFinal += hiddenMessage[i];
    }
}

console.log(messageFinal); // Affiche tout sur une seule ligne