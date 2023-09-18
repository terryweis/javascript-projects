// Declare and assign the variables below

// Use console.log to print the 'typeof' each variable. Print one item per line.

// Calculate a space mission below

// Print the results of the space mission calculations below

// Calculate a trip to the moon below

// Print the results of the trip to the moon below


// Name of the space shuttle//

let shuttle = "Determination";

//Shuttle Speed (MPH)//

let speed = 17500;

// Distance to Marks (KM)//

let distance = 225000000;

//Distance to Moon (KM)//

let distance2 = 384400;

// Miles per Kilometer//

let mpk = 0.621;

console.log(typeof shuttle);

console.log(typeof speed);

console.log(typeof distance);

console.log(typeof distance2);

console.log(typeof mpk);


// Miles and to Mars//

let marsMiles = distance * mpk;

console.log(marsMiles, "Miles to Mars");

// Hours to Mars//

let hoursToMars = marsMiles / speed;

console.log(hoursToMars, "Hours to Mars");

// Days to get to Mars//

let daysToMars = hoursToMars / 24;

console.log(daysToMars,"days to Mars");

console.log(shuttle +"will take" + daysToMars + "days to reach Mars.");

// Miles to the Moon //

let moonMiles = distance2 * mpk;

console.log(moonMiles, "Miles to the Moon");

// Hours to Moon //

let hourstoMoon = moonMiles / speed;

console.log(hourstoMoon, "hours to The Moon");

// Days to get to Mars //

let daystoMoon = hourstoMoon / 24;

console.log(daystoMoon, " Days to get to the Moon");

console.log(shuttle + "will take" + daystoMoon + " Days to reach the Moon");
