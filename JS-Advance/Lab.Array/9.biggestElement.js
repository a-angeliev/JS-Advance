function solve(arr){
    let biggest = arr[0][0];
    
    for(let el of arr){
        let currentMin = Math.max(...el);
        if(currentMin > biggest){
            biggest = currentMin;
        }
    }
    return biggest
}   
solve([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]
   )