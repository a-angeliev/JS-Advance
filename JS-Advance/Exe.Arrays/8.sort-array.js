function solve(arr){
    function sortSameLength(a,b){
        let aUp = a.toUpperCase();
        let bUp = b.toUpperCase();
        if(aUp<bUp){
            return -1
        }else if(bUp< aUp){
            return 1
        }else{
            return 0
        }}
    arr.sort(function(a,b){
        if(a.length<b.length){
            return -1
        }else if(b.length< a.length){
            return 1
        }else{
            return sortSameLength(a,b)
        }
    })
    return arr.join("\n")
}

console.log(solve(['Isacc', 
'Theodor', 
'Jack', 
'Harrison', 
'George']
))