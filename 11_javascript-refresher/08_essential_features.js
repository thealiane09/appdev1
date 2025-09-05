let hobbies = ["Sleeping", "Baking", "Watching korean drama"];
hobbies.map(h => console.log(h));

let student = { name: "Altia", age: 21 };
let { name, age } = student;
console.log(name, age);

let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5];
console.log(arr2);
