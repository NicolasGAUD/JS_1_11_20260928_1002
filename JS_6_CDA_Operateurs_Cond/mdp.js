// 1. On charge le module que vous venez d'installer
const prompt = require('prompt-sync')();

// 2. On utilise le prompt normalement
const pwd = prompt("What's your pwd? ");
if (pwd === "secret"){
	console.log("Welcome! 👋")
}
else{
	console.log("Wrong password! ❌")
};