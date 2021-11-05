function sameNumbers(nums){
    let numbers = [];
    let sameFlag = true;
    let lastElement = String(nums).slice(-1);
    let sum = 0;
    for(const number of String(nums)){
        if(number != lastElement){
            sameFlag = false;
        }
        numbers.push(number);
        sum += Number(number);
    }
    
    console.log(sameFlag);
    console.log(sum);
}

sameNumbers(1234)