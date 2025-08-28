let foods = ["Pork Adobo", "Ampalaya", "Gabi with lots of chili"];

foods.push("Pansit Bato"); // add end
foods.shift(); // remove first

for (let food of foods) {
  console.log(food);
}

let newFoods = foods.map(f => "I like" + f);
console.log(newFoods);
