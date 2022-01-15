function solve(num1,num2,opr){
    let result;
    switch (opr){
        case '+': result = num1 + num2; break;
        case '-': result = num1 - num2; break;
        case '/': result = num1 / num2; break;
        case '*': result = num1 * num2; break;
        case '%': result = num1 % num2; break;
        case '**': result = num1 ** num2; break;
    }
    console.log(result);
}

solve(5, 6 , '-')
solve(3, 5.5 , '*')