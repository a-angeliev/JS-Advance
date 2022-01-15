function solve(list){
    function sumAll(list){
        let result = 0;
        for(x of list){
            result += Number(x);
        }
        console.log(result);
    }

    function sumInv(list){
        let result = 0;
        for(x of list){
            result += 1/Number(x);
       }
       console.log(result);
    }

    function conc(list){
        let result = '';
        for(x of list){
            result += String(x);
        }
        console.log(result);
    }
    sumAll(list)
    sumInv(list)
    conc(list)
}   

solve([1,2,3])