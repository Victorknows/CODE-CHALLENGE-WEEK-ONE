let prompt = require("prompt-sync")();

//Function to check the speed and calculate demerit points.
function speedDetector(){
    //Prompt that asks for the speed
speed = prompt("How far was the car going?: ")

//Defines the speed limit.
const speedLimit = 70;
//Checks to see if the speed is below the speed limit
if (speed < speedLimit){
    console.log("Ok")
}
//Calculates the demerit points for cars above the speed limit
else{
    let = demeritPoints = Math.floor((speed - speedLimit) / 5);
    //Prints out the demerit points if the speed is above the speed limit
    console.log(`Points: ${demeritPoints}`)
}
}
//Function that checks to see if the demerit points are above 12
function suspension(){
    if (demeritPoints >= 12){
        //If the points are above 12 it tells the user that their license has been suspended
        console.log("Your license has been suspended");
    }

}
//Call the function that checks the speed and calculates demerits points
speedDetector();
//Call the function that checks if the points are above 12
suspension();