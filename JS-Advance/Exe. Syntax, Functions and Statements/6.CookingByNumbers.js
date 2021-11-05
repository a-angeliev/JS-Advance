function cookingNumbers(num, operation1, operation2, operation3, operation4, operation5){
    num = Number(num)
    function chop(number){
        return number / 2;
    }

    function dice(number){
        return Math.sqrt(number);
    }

    function spice(number){
        return number += 1;
    }

    function bake(number){
        return number * 3;
    }

    function fillet(number){
        return number * 0.8
    }

    let map = {"chop": chop,
                "dice": dice,
                "spice": spice,
                "bake": bake,
                "fillet": fillet};

    let mapOperation = {0 : operation1,
                        1 : operation2,
                        2 : operation3,
                        3 : operation4,
                        4 : operation5};

    for (let index = 0; index<= 4; index++){
        num = map[mapOperation[index]](num);
        console.log(num);
    }  
}

//cookingNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop')
cookingNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet')