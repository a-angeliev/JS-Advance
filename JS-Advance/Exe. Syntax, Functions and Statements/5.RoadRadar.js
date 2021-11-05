function speedCheck(speed, place){
    let map = {'motorway': 130,
                'interstate': 90,
                'city': 50,
                'residential': 20};
    let aceptedSpeed = map[place];
    if(Number(speed) <= aceptedSpeed){
        console.log(`Driving ${speed} km/h in a ${aceptedSpeed} zone`);
    }else{
        let status;
        if(speed -aceptedSpeed <= 20){
            status = "speeding";
        }else if(speed - aceptedSpeed <= 40){
            status = "excessive speeding";
        }else{
            status = "reckless driving";
        }
        console.log(`The speed is ${speed - aceptedSpeed} km/h faster than the allowed speed of ${map[place]} - ${status}`);
    }
}

speedCheck(40, 'city')
speedCheck(21, 'residential')
speedCheck(120, 'interstate')
speedCheck(200, 'motorway')