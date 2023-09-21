//Define three variables for the LaunchCode shuttle - one for the starting fuel level, another for the number of astronauts aboard, and the third for the altitude the shuttle reaches.
const input = require('readline-sync');

let  startingFuel;
let astronautsOnBoard; 
let altitude;

/*Exercise #4: Construct while loops to do the following:
  a. Query the user for the starting fuel level. Validate that the user enters a positive, integer value greater than 5000 but less than 30000. */

startingFuel = input.question("Please enter a starting fuel level between 5000 - 30000.");
startingFuel = Number(startingFuel);
  
while (startingFuel > 30000 || startingFuel <= 5000 || isNaN(startingFuel)){
    startingFuel = input.question("Please enter a starting fuel level between 5000 - 30000.")
      startingFuel = Number(startingFuel);
    
}

console.log(`Starting Fuel is set at ${startingFuel}`);



//b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.
  
astronautsOnBoard = input.question("How many astronauts should we send (to a max of 7)?");
astronautsOnBoard = Number(astronautsOnBoard)

while (astronautsOnBoard <= 0 || astronautsOnBoard > 7){
  astronautsOnBoard = input.question("How many astronauts should we send (to a max of 7)?");
astronautsOnBoard = Number(astronautsOnBoard)

}
console.log(`Awesome! We will prep our team of ${astronautsOnBoard}. Lets see if we can make it into orbit!`);  
  
  
//c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.
altitude = 0
while (startingFuel >= (astronautsOnBoard * 100)){
  altitude = (altitude + 50);
  startingFuel = startingFuel - (astronautsOnBoard * 100);

}

/*Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”

If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/

if (altitude >= 2000){
  console.log(`The shuttle gained an altitude of ${altitude}km. Orbit achieved!`);
 } else{
  console.log(`The shuttle gained an alititde of ${altitude}. Failed to reach orbit.`);
 }