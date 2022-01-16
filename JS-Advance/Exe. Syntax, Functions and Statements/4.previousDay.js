function solve(year, month, day){
    let date = new Date(`${year}-${month}-${day}`)
    // date.setFullYear(year)
    // date.setMonth(month)
    date.setDate(date.getDate()-1)

    console.log(`${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`);

}
solve(2016, 9, 30)
solve(2016, 10, 1)