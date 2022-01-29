function solve(input){
    let [town, lat, lon] = input[0].slice(2, input[0].length -2).split(" | ")
    let result = []
    for(let row of input.splice(1)){
        let r = row.slice(2, row.length -2).split(" | ")
        result.push({
            [town]: r[0],
            [lat] : Number(Number(r[1]).toFixed(2)),
            [lon] :Number(Number(r[2]).toFixed(2)),
        })
    }
    console.log(JSON.stringify(result));
}
solve(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']
)