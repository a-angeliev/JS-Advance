function solve(arr){
    let newArray = [];
    for(let el of arr){
        if(el>=0){
            newArray.push(el)
        }else{
            newArray.unshift(el)
        }
    }
    for(let el of newArray){
        console.log(el);
    }
}
solve([7,-2,8,9])