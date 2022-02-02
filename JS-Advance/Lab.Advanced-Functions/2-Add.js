function solution(input){
    return function(a){
        return a+input
    }
}

let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));

