function Checker(x1, y1, x2, y2){
    let result = Math.sqrt(Math.pow((-x1), 2) + Math.pow((-y1), 2))/// 
    if(Number.isInteger(result)){
        console.log(`{${x1}, ${y1}} to {${0}, ${0}} is valid`);
    }else{
        console.log(`{${x1}, ${y1}} to {${0}, ${0}} is invalid`);
    }

    result = Math.sqrt(Math.pow((x2), 2) + Math.pow((y2), 2))/// 
    if(Number.isInteger(result)){
        console.log(`{${x2}, ${y2}} to {${0}, ${0}} is valid`);
    }else{
        console.log(`{${x2}, ${y2}} to {${0}, ${0}} is invalid`);
    }

    result = Math.sqrt(Math.pow((x2-x1), 2) + Math.pow((y2-y1), 2))
    if(Number.isInteger(result)){
        console.log(`{${x1}, ${x2}} to {${x2}, ${y2}} is valid`);
    }else{
        console.log(`{${x1}, ${x2}} to {${x2}, ${y2}} is invalid`);
    }
    
}

Checker(2, 1, 1, 1)
Checker(3, 0, 0, 4)