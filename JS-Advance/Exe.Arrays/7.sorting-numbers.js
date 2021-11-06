function solve(numbers){
    let newNum = []
    flag = true
    let lenghtp = numbers.length
    for (let index = 0; index < lenghtp; index++){
        if(flag){
            let minNum = Math.min(...numbers)
            let currIndex = numbers.indexOf(Math.min(...numbers));
            newNum.push(numbers[currIndex]);
            numbers.splice(currIndex,1)
            flag = false;
        }else{
            let currIndex = numbers.indexOf(Math.max(...numbers));
            newNum.push(numbers[currIndex]);
            numbers.splice(currIndex,1)
            flag = true;
        }}

    return newNum
}

solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])