class Person {
  constructor(name) {
    this.name = name;
  }

  sayHello() {
    console.log("Hi, I am " + this.name);
  }
}

class Student extends Person {
  study() {
    console.log(this.name + " is pretty");
  }
}

const person1 = new Person("Thea");
person1.sayHello();

const student1 = new Student("Altia");
student1.sayHello();
student1.study();