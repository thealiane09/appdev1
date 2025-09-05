function greet(name) {
  return "Hello " + name;
}
console.log(greet("Altia"));

const square = (num) => num * num;
console.log("Square of 4:", square(9));

function calculator(a, b) {
  return {
    sum: a + b,
    product: a * b
  };
}
console.log(calculator(3, 7));
