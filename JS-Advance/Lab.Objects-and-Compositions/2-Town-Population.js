
function solve(arr){
    let towns = {}
    for (const townInfo of arr) {
        let [town, popultaion] = townInfo.split(" <-> ")
        if(!towns[town]){
            towns[town] = Number(popultaion)
        }else{
            towns[town] += Number(popultaion)

    }
    }
    for (const x in towns) {
        console.log(`${x} : ${towns[x]}`);
       
    }
}
solve(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']
);