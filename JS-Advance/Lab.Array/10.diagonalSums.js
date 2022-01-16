function solve(arr){
    let mainSum = 0;
    let secSum = 0;
    for(let i=0; i< arr.length; i++){
        mainSum += arr[i][i]
    }

    for(let i=0; i<arr.length; i++){
        secSum += arr[i][arr.length - i-1]

        
    }
    console.log(`${mainSum} ${secSum}`);
}
solve([[20, 40], [10,60]])