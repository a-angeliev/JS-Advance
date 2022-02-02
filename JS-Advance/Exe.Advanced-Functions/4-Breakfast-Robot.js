function solution() {
    let ingr = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0,
    }

    let recipe = {
        apple:{
            carbohydrate:1,
            flavour:2
        },
        lemonade: {
            carbohydrate: 10,
            flavour: 20,
        },
        burger: {
            carbohydrate: 5,
            fat: 7,
            flavour: 3,
        },
        eggs: {
            protein: 5,
            fat: 7,
            flavour: 3,
        },
        turkey: {
            protein: 10,
            carbohydrate:10,
            fat:10,
            flavour:10,
        },
    }

    return function(string) {
        [command, arg1, arg2] = string.split(" ")
        if(command == "restock"){
            ingr[arg1] += Number(arg2)
            return "Success"
        }else if(command == "prepare"){
            let rec = arg1
            for(let el in recipe[rec]){
                let neededValue = recipe[rec][el] * arg2
                if(ingr[el] < neededValue){
                    return `Error: not enough ${el} in stock`
                }
            }
            for(let el in recipe[rec]){
                let neededValue = recipe[rec][el] * arg2
                ingr[el] -= neededValue
            }
            return "Success"
        }else if(command == "report"){
            let result = ""
            for(let el in ingr){
                if(el != "flavour"){result += `${el}=${ingr[el]} `
            }else{
                result += `${el}=${ingr[el]}`
            }
            }
            return result;
        }
        
    }
    
}





let manager = solution (); 
console.log (manager ("restock carbohydrate 10000")); // Success 
console.log (manager ("restock flavour 10000")); // Success 

console.log (manager ("prepare lemonade 1"));
console.log (manager ("restock flavour 50")); // Success 
console.log (manager ("report")); // Error: not enough carbohydrate in stock 
