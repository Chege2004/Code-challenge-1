function speedDetector(){
    //Prompt user for speed
    const speedString = prompt("Enter your speed");
    //Check if user entered a value as well as convert the input to a number
    const speed = parseInt(speedString);
    const speedLimit = 70;
    const kmPerPoint = 5;
    if (speed === null || speedString.trim() === ""){
        alert("Please enter a value");
        speedString = prompt("Enter your speed");
        return;
    }
    else if (isNaN(speed) || speed < 0){
        alert("Please enter a value greater than 0 and in number format");
        return;
        //Check if the speed is below the speed limit
    }
    else if (speed <=speedLimit){
        console.log("Ok");
        return;
    }
    //Check if the speed is above the speed limit
    const overSpeed = speed - speedLimit;
    const points = Math.floor((speed - speedLimit)/kmPerPoint);
    console.log(points + " points");
    if (points >= 12){
        console.log("License suspended");
    }
}
