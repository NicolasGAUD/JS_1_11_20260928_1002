// 1. On charge le module que vous venez d'installer
const prompt = require('prompt-sync')();

// 2. On utilise le prompt normalement
const userName = prompt("What's your name? ");
console.log("Hello " + userName);

const age = prompt("How old are you? ");
const ageNumber = parseInt(age);
console.log("Tu as " + ageNumber + " ans !");
