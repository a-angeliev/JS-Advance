function solve(input, str) {
    let result
    if(str == "asc"){
        result = input.sort((a,b)=>a-b)
    }else if(str == "desc"){
        result = input.sort((a,b)=> b-a)
    }
    return result;
}
solve([10, 8, 5, 7, 9, 6], 'asc')