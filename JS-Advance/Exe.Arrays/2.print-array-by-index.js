function solve(arr, num){
    let newArray = []
    for(let index = 0; index < arr.length; index += num){
        newArray.push(arr[index])
    }
    return newArray
}
solve(['5', 
'20', 
'31', 
'4', 
'20'], 
2
)