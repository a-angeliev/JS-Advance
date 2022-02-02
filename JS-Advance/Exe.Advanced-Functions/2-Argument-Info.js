function solve() {
    let result = {}
    for(let el of arguments){
        console.log(`${typeof(el)}: ${el}`);
        if(!Object.keys(result).includes(typeof(el))){
            result[typeof(el)] = []
        }
        result[typeof(el)].push(el)
    }
    let sortedResult = Object.entries(result).sort((a,b)=> b[1].length-a[1].length)
    sortedResult.forEach(x => console.log(`${x[0]} = ${x[1].length}`))

    
}
//solve('cat', 42, "dog", function () { console.log('Hello world!'); })
solve({ name: 'bob'}, 3.333, 9.999)