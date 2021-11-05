function gcd(num1, num2){
    for( let index = num2; index >= 0; index = index - 1){
        if(num1 % index == 0 && num2 % index == 0){
            console.log(index);
            break
        }
    }
}

gcd(15, 5)