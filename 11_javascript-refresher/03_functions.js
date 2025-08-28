function greet(name) {
  return "Hello " + name;
}
console.log(greet("Altia"));

const square = (num) => num * num;
console.log("Square of 3:", square(3));

function calculator(a, b) {
  return {
    sum: a + b,
    product: a * b
  };
}
console.log(calculator(3, 7));
