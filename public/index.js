var names = ["Mario", "Luigi", "Yoshi", "Toad"];
console.log(names);
var mixed = ["lol", "k", "sure", 0];
console.log(mixed);
mixed.push(22);
mixed.push("now");
console.log(mixed);
var ninja = {
    name: "Punit",
    age: 30,
    skills: ["Coding", "Finance", "Intellectaul Thinking"]
};
var character;
var ninjas = []; // Union types
ninjas.push("Punit");
ninjas.push(30);
console.log(ninjas);
var ninjaTwo;
// This is an declarement
ninjaTwo = {
    name: "Punit",
    age: 24,
    beltColor: "Black",
    isReadyToFight: true,
    favColor: true
};
// This is assignment of values to the declarement seprated by ":" diff "="
console.log(ninjaTwo);
