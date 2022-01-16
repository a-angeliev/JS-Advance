function solve(arr){
    let newArray = []
    for(let i =0; i<arr.length; i++){
        if(i%2 == 1){
            newArray.push(arr[i])
        }
    }
    //console.log(newArray);
    newArray.reverse()
    // console.log(newArray);

    for(let i=0; i < newArray.length; i++){
        newArray[i] +=newArray[i]
    }
    return newArray.join(" ")
}
solve([10,15,20,25])