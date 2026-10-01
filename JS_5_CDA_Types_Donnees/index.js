// typeof 1;        // "number"
// typeof 12.54;    // "number"    entier ou décimal, c'est pareil en JS
// typeof "Tours";  // "string"
// typeof true;     // "boolean"

/* ======================================================= */

// console.log(typeof -7)
// console.log(typeof "J'adore les tacos")
// console.log(typeof false)
// console.log(typeof "42")
// console.log(typeof "")

// PS D:\CDA\JS_5_CDA> node index.js
// number
// string
// boolean
// string
// string

/* ======================================================= */

// let cart = null;
// console.log(typeof cart);
// let notDefined;
// console.log(notDefined);
// console.log(doesNotExist);

// object
// undefined
// D:\CDA\JS_5_CDA\index.js:24
// console.log(doesNotExist);

// ReferenceError: doesNotExist is not defined
    // at Object.<anonymous> (D:\CDA\JS_5_CDA\index.js:24:13)
    // at Module._compile (node:internal/modules/cjs/loader:1929:14)
    // at Object..js (node:internal/modules/cjs/loader:2060:10)
    // at Module.load (node:internal/modules/cjs/loader:1651:32)
    // at Module._load (node:internal/modules/cjs/loader:1443:12)
    // at wrapModuleLoad (node:internal/modules/cjs/loader:261:19)
    // at Module.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:154:5)
    // at node:internal/main/run_main_module:33:47
	
// console.log(typeof null);
// ==>object
// console.log("Camille" * 2);
// NaN

/* ======================================================= */

// Ne compare jamais deux décimaux avec ===.

// const a = 0.1 + 0.2;
// const b = 0.3;

// Version correcte avec une marge d'erreur
// const sontEgaux = Math.abs(a - b) < Number.EPSILON; 

// console.log(sontEgaux); // true

/* =================== */ 

// const a = 0.1 + 0.2;
// const b = 0.3;

// Comparaison après arrondi à 2 décimales
// const sontEgaux = a.toFixed(2) === b.toFixed(2);

// console.log(sontEgaux); // true

/* ======================================================= */

// console.log(typeof 42); // number
// console.log(typeof "tacos"); // String
// console.log(typeof true); // boolean
// console.log(typeof null); // object
// console.log(typeof undefined); // undefined
// console.log(typeof NaN); // number
// console.log(typeof []); // object
// console.log(typeof {}); // object

