function sameNumbers(nums){
    let sameFlag = true;
    let lastElement = String(nums).slice(-1);
    let sum = 0;
    for(const number of String(nums)){
        if(number != lastElement){
            sameFlag = false;
        }
        sum += Number(number);
    }
    
    console.log(sameFlag);
    console.log(sum);
}

sameNumbers(1234)