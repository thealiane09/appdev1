console.log("== vs ===");
console.log("5" == 5);
console.log("5" === 5);


let undef;
let nul = null;
console.log("Undefined:", undef);
console.log("Null:", nul);

let obj = {
  name: "Altia Inale",
  normalFunc: function() {
    console.log("Normal:", this.name);
  },
  arrowFunc: () => {
    console.log("Arrow:", this.name);
  }
};
obj.normalFunc();
obj.arrowFunc();

let arrA = [1,2,3];
let arrB = arrA;
arrB.push(4);
console.log("arrA:", arrA, "arrB:", arrB);

let arrC = [1,2,3];
let arrD = [...arrC];
arrD.push(4);
console.log("arrC:", arrC, "arrD:", arrD);
