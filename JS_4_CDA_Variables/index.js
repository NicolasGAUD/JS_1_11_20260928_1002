const myName = "Nicolas"; // Ne changera pas
let myAge = 47; // Changera
let myHobby = "Photo"; // Changera possiblement
console.log("Je m'appelle " + myName + " et j'ai " + myAge + " ans");
/* let 2fast = "furious"
let 2fast = "furious"

SyntaxError: Invalid or unexpected token
    at wrapSafe (node:internal/modules/cjs/loader:1861:18)
    at Module._compile (node:internal/modules/cjs/loader:1903:20)
    at Object..js (node:internal/modules/cjs/loader:2060:10)
    at Module.load (node:internal/modules/cjs/loader:1651:32)
    at Module._load (node:internal/modules/cjs/loader:1443:12)
    at wrapModuleLoad (node:internal/modules/cjs/loader:261:19)
    at Module.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:154:5)
    at node:internal/main/run_main_module:33:47 */
	
/* myName = "Bill";
myName = "Bill";
       ^

TypeError: Assignment to constant variable.
    at Object.<anonymous> (D:\cda\JS_4_CDA\index.js:19:8)
    at Module._compile (node:internal/modules/cjs/loader:1929:14)
    at Object..js (node:internal/modules/cjs/loader:2060:10)
    at Module.load (node:internal/modules/cjs/loader:1651:32)
    at Module._load (node:internal/modules/cjs/loader:1443:12)
    at wrapModuleLoad (node:internal/modules/cjs/loader:261:19)
    at Module.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:154:5)
    at node:internal/main/run_main_module:33:47  */
	
let nbLikes = 0;
nbLikes++;
console.log(nbLikes);
nbLikes+=10;
console.log(nbLikes);
nbLikes-=3
console.log(nbLikes);