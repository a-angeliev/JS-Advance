function solve(arr){
    if (typeof arr === "number"){
        console.log((Math.PI*arr*arr).toFixed(2));
    }else{
        console.log(`We can not calculate the circle area, because we receive a ${typeof(arr)}.`);
    }
}
solve(5)
solve("nam,e")