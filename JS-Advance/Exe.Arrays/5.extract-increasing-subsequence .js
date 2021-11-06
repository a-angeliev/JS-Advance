function solve(num){
    let newArray = []
    let index = 0
    for(let number of num){
        if(index == 0){
            newArray.push(number)
            index++
        }else{
            if(newArray[newArray.length-1] <= number){
                newArray.push(number);
            }
        }
    }
    return newArray
}
console.log(solve([20, 
    3, 
    2, 
    15,
    6, 
    1]
    ))