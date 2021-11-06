function solve(arr){
    let magicFlag = true
    let magicSum = arr[0].reduce((a,b) => a+b, 0)
    for(let row = 0; row < arr.length; row++){
        let colSum = 0
        if(magicSum !== arr[row].reduce((a,b) => a+b, 0)){
            magicFlag = false;
            break;
        }
        for(let col = 0; col <arr.length; col++){
            colSum += arr[row][col]
        }
        if(magicSum !== colSum){
            magicFlag = false;
            break
        }
    }
    if(magicFlag){
        return true}else{
            return false
    }
}
console.log(solve([[11, 32, 45],
    [21, 0, 5],
    [21, 1, 1]]
   
   ))

