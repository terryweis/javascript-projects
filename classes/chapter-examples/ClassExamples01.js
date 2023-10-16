//Try adding new properties inside constructor.
class Astronaut {
   constructor(name, age, mass, color){
     this.name = name;
     this.age = age;
     this.mass = mass;
     this.color = color;
   }
}

let fox = new Astronaut('Fox', 7, 12);

console.log(fox);
console.log(fox.age, fox.color);

fox.age = 9;
fox.color = 'red';

console.log(fox);
console.log(fox.age, fox.color);

//Try modifying or adding properties below.

fox.age = 95;
fox.name = "StarFox";

console.log(fox);