// const apple = {
  // color: "green",
  // diameter: 10,
  // isEaten: false,
// };
// console.log(apple.color);
// console.log(apple["diameter"]);
// console.log(apple.weight);

/* ======================================================== */

const apple = {
  color: "green",
  vitamins: ["A", "B1", "B2", "C"],          // un tableau
  variety: { code: 576, name: "Granny" },    // un objet dans l'objet
  gather: function () {                      // une fonction
    return "Voici une pomme !";
  },
};
console.log(apple.vitamins[2]);   // "B2"       ← on enchaîne
console.log(apple.variety.name);  // "Granny"   ← et on descend
console.log(apple.gather());      // "Voici une pomme !"   ← les parenthèses appellent

/* ======================================================== */

// Le point est plus court, tu l'utiliseras presque toujours. Les crochets deviennent indispensables quand le nom de la propriété est dans une variable :

const choice = "color";
console.log(apple[choice]);   // ✅ "green" : lit la propriété dont le nom est dans choice
console.log(apple.choice);    // ❌ undefined : cherche une propriété qui s'appelle "choice"

apple.growsOn = "Tree";   // la propriété n'existait pas : elle est créée
apple.color = "red";      // elle existait : elle est remplacée
console.log(apple);
delete apple.growsOn;     // et elle disparaît
