function speedDetector(){
    const speedString = prompt("Enter your speed");
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
    }
    else if (speed <=speedLimit){
        console.log("Ok");
        return;
    }
    const overSpeed = speed - speedLimit;
    const points = Math.floor((speed - speedLimit)/kmPerPoint);
    console.log(points + " points");
    if (points >= 12){
        console.log("License suspended");
    }
}
