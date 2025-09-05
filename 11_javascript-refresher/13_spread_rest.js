const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5];
console.log("New Numbers:", newNumbers);

const user = { name: "Altia Gonzales Inale", age: 21 };
const newUser = { ...user, course: "BSIS 3 A" };
console.log("New User:", newUser);

function sum(...nums) {
  return nums.reduce((total, n) => total + n, 0);
}
console.log("Sum of 1 to 5:", sum(1, 2, 3, 4, 5))