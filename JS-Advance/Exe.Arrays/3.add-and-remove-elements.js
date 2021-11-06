function solve(arr){
    let numberArray = [];
    let currentNumber = 1;
    for(let command of arr){
        if(command === 'add'){
            numberArray.push(currentNumber);
            currentNumber += 1;
        }else{
            numberArray.pop();
            currentNumber+=1;
        }
    }
    if(numberArray.length !== 0){
        for(let num of numberArray){
            console.log(num);
        }
    }else{
        console.log("Empty");
    }
}

solve(['remove', 'remove', 'remove'])
