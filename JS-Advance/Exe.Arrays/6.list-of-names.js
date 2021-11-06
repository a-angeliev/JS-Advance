function solve(arr){
    arr.sort(function (b, a) {
        let bUC = b.toUpperCase();
        let aUC = a.toUpperCase();
        if (aUC > bUC) {
            return -1;
        }
        if (bUC > aUC) {
            return 1;
        }
        return 0;
    })
    for(let index = 0; index < arr.length; index++){
        console.log(`${index+1}.${arr[index]}`);
    }
}

solve(["John", "Bob","em", "Christina", "Ema"])