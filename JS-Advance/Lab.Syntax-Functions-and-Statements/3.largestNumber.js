function solve(ar1, ar2, ar3){
    let number = ar1
    if(number<ar2){
        number = ar2;
    }
    if (number < ar3){
        number = ar3;
    }
    console.log(`The largest number is ${number}.`);
}

solve(-3, -5, -22.5)
solve(5, -3, 16)