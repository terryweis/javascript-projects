// Use terminal commands to see what happens when we call Astronaut but do not pass in 3 arguments.

// Next, set default values for 1 or more of the parameters in constructor.

class Astronaut {
   constructor(name, age, mass = 54, color, type){
     this.name = name;
     this.age = age;
     this.mass = mass;
     this.color = color;
     this.type = type;
   }
}

let tortoise = new Astronaut('Speedy', 120);
tortoise.color = 'brown';
tortoise.type = "GI"

console.log(tortoise);

// What happens if we call Astronaut and pass in MORE than 3 arguments? TRY IT!