let req = { model: 'VW Golf II',
            power: 90,
            color: 'blue',
            carriage: 'hatchback',
            wheelsize: 14 }

function solve(req){
    const engins = {"small":{ power: 90, volume: 1800 },
                    "normal": { power: 120, volume: 2400 },
                    "monster":  { power: 200, volume: 3500 }}
    if(req.power <= 90){
        req.engine = engins["small"]
    }else if(req.power <= 120){
        req.engine = engins["normal"]
    }else{
        req.engine = engins["monster"]
    }
    delete req.power
    let carriage = {"Hatchback": { type: 'hatchback', color: req.color},
                    "Coupe": { type: 'coupe', color: req.color }}

    if(req.carriage === "hatchback"){
        req.carriage = carriage["Hatchback"]
    }else{
        req.carriage = carriage["Coupe"]
    }
    delete req.color


    if(req.wheelsize % 2 == 0){
        req.wheels = [req.wheelsize -1,req.wheelsize -1 ,req.wheelsize -1 ,req.wheelsize -1 ]
    }else{
        req.wheels = [req.wheelsize,req.wheelsize,req.wheelsize,req.wheelsize]
    }
    delete req.wheelsize
    return req
}
console.log(solve(req));