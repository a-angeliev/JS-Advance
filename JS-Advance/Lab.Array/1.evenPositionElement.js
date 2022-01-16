function solve(list){
    let result = []
    for(let i=0; i< list.length; i++){
        if(i%2 == 0){
            result.push(list[i])
        }
    }
    console.log(result.join(' '));
}
solve(['20','30','40','50','60']);