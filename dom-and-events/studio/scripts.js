// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function () {
    //variables
    const takeOff = document.getElementById("takeoff");
    const flightStatus = document.getElementById("flightStatus");
    const shuttleBackground = document.getElementById("shuttleBackground");
    const spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    const land = document.getElementById("landing");
    const missionAbort = document.getElementById("missionAbort");
    const rocket = document.getElementById("rocket");
    let rocketPosx = 0;
    let rocketPosy = 0;
// listeners
      takeOff.addEventListener("click", function () {
      if (confirm("Confirm that the shuttle is ready for takeoff")) {
        flightStatus.innerHTML = "Shuttle in flight";
        shuttleBackground.style.backgroundColor = "blue";
        spaceShuttleHeight.innerHTML = 10000;
      }
});
    land.addEventListener('click', function() {
        window.alert("The shuttle is landing. Landing gear engaged.")
        flightStatus.innerHTML = "The shuttle has landed";
        shuttleBackground.style.backgroundColor = "green";
        spaceShuttleHeight.innerHTML = 0;
});
    missionAbort.addEventListener('click', function(){
        if (confirm("Confirm that you want to abort the mission")) {
            flightStatus.innerHTML = "Mission Aborted"
            shuttleBackground.style.backgroundColor = "green";
            spaceShuttleHeight.innerHTML = 0;
        }
});    
    document.addEventListener("click", function(event){

        if (event.target.id === "left"){
          rocketPosx += +10;
          rocket.style.marginLeft = rocketPosx + "px"
        }
        if (event.target.id === "right"){
          rocketPosx += -10;
          rocket.style.marginLeft = rocketPosx + "px"
        }
        if (event.target.id === "up"){
          rocketPosy += +10;
          rocket.style.marginBottom = rocketPosy + "px"
        }
        if (event.target.id === "down"){
          rocketPosy += -10;
          rocket.style.marginBottom = rocketPosy + "px"
        }
    });
});