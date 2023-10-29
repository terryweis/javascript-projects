function init () {
    const missionAbort = document.getElementById("abortMission");
    const button = document.getElementById("liftoffButton");
    const paragraph = document.getElementById("statusReport");

    // Put your code for the exercises here.
    button.addEventListener('click', function() {
        paragraph.innerHTML = 'Houston! We have liftoff!';
    });

    missionAbort.addEventListener('mouseover', function(event){
        event.target.style.color = 'red';
    });
    missionAbort.addEventListener('mouseout', function(event){
        event.target.style.color = "";
    });
    missionAbort.addEventListener('click', function(event){
       let response = window.confirm("Are you sure you want to abort the mission?")
       console.log(response)
       if (response === true){
        paragraph.innerHTML = 'Mission aborted! Space shuttle returning home.'
       }
    })
    
}

window.addEventListener("load", init);
