function solve(input){
    let result = []
    input.forEach(x=>{
        [com, value] = x.split(" ")
        if(com == "add"){
            result.push(value)
        }else if(com == "remove"){
            result = result.filter(x=> x !== value)
        }else{
            console.log(result.join(","));
        }
    })
}

solve(['add pesho', 'add george', 'add peter','add george', 'remove george','print'])