function solve(n,k){
    let result = [1]
    let sum = 0
    for(let i=0; i<n-1; i++){
        for(let z=1; z<=k; z++){
            if(Number.isInteger(result[result.length-z])){
                sum += result[result.length-z]
            }       
        }
        result.push(sum)
        sum = 0
    }
    return result
}

solve(6,3)