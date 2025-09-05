const person = {
  name: "Altia Gonzales Inale",
  age: 21
};

const { name, age } = person;
console.log("Name:", name, "Age:", age);

const hobbies = ["Sleeping", "Baking", "Watching"];
const [hobby1, hobby2, hobby3] = hobbies;
console.log("Hobbies:", hobby1, ",", hobby2, ",", hobby3);

function printName({ name }) {
  console.log("Person’s name is:", name);
}
printName(person);

