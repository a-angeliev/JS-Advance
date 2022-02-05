

function result(data, start, end){
    if(!Array.isArray(data)){
        return NaN
    }
    start = Math.max(start,0)
    end = Math.min(end, data.length)
    return data.slice(start,end+1).reduce((a,x) => a+Number(x), 0)
}

console.log(result([], 1, 2));