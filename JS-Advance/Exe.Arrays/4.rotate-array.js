function solve(arr, rot){
    for(let rotation = 0; rotation < rot; rotation++){
        let currentElement = arr.pop();
        arr.unshift(currentElement);
    }
    console.log(arr.join(" "));
}


solve(['1', 
'2', 
'3', 
'4'], 
2
)