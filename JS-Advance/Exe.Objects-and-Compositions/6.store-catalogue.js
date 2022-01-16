function solve(arr){
    
    arr.sort(function(a,b){
        a = a.split(":")[0]
        b = b.split(":")[0]
        if(a<b){
            return -1
        }else if(b<a){
            return 1
        }else{
        return 0
        }
    })
    let firstLetter = arr[0].split(":")[0][0]
        console.log(firstLetter);
    for(const x of arr){
        let fLetter = x.split(":")[0][0]
        if(fLetter === firstLetter){
            console.log(`  ${x.split(" : ")[0]}: ${x.split(" : ")[1]}`);
        }else{
            console.log(fLetter);
            firstLetter = fLetter
            console.log(`  ${x.split(" : ")[0]}: ${x.split(" : ")[1]}`);
        }
    }
    
}

solve(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']
)