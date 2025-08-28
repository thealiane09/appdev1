let aboutMe = {
  name: "Altia Inale",
  age: 21,
  course: "BSIS 3- A",
  introduce: function() {
    console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
  }
};

aboutMe.introduce();


aboutMe.hobby = "Singing in the bathroom";
console.log(aboutMe);
