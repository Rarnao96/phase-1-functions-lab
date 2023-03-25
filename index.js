// Code your solution in this file!
function distanceFromHqInBlocks(street){
    if (street >= 42){
    return (street - 42)
    } else {
    return (42 - street)
    }
}

function distanceFromHqInFeet(block){
    distanceFromHqInBlocks(block);
    if (block >= 42){
        return ((block -42) * 264)
    } else {
        return ((42 - block) * 264)
    }

}

function distanceTravelledInFeet(start, destination){
    if ((destination-start) < 1){
        return ((destination -start)* (-264))
    } else {
        return ((destination - start)*264)
    }
}

function calculatesFarePrice(start, destination) {
    if (distanceTravelledInFeet(start, destination) <= 400){
        return 0 
    } else if (distanceTravelledInFeet(start,destination) > 400 && distanceTravelledInFeet(start, destination) <= 2000){
        return ((distanceTravelledInFeet(start, destination)- 400) * .02)
    } else if (distanceTravelledInFeet(start, destination)> 2000 && distanceTravelledInFeet(start, destination) <2500){
        return 25
    } else if (distanceTravelledInFeet(start, destination)>=2500){
        return 'cannot travel that far'
    }
}