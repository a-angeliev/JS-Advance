function getFibonator() {
    let result = [0]
    return function () {
        let num1
        if(result.length == 1){
            num1 = 1
        }else{
            num1 = result[result.length-2]
        }
        
        let num2 = result[result.length-1]
        result.push(num1+num2)
        return num1+num2
    }
}



let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); 
