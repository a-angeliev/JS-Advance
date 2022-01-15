function solve(mounth, year) {
    let date = new Date()
    date.setDate(1)
    date.setMonth(mounth - 1)
    date.setUTCFullYear(year)
    let days = 0
    while (true) {
        days++;
        date.setDate(days + 1)
        if (date.getDate() == "1") {
            break;
        }
    }
    console.log(days);
}

solve(1, 2012)
solve(2, 2021)