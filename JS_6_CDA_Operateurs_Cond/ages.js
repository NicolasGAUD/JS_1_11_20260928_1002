// 1. On charge le module que vous venez d'installer
const prompt = require('prompt-sync')();

const age = prompt("How old are you?");
console.log(typeof age);
const ageNumber = parseInt(age);


if (ageNumber < 3) {
  console.log("Hello, Baby 🍼!");
} else if (ageNumber < 18) {
  console.log("Hi! 👋");
} else if (ageNumber < 100) {
  console.log("Greetings 🖖");
} else {
  console.log("Wow... 😲");
};