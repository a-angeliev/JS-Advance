function sumTable() {
    let resultSumElement = document.getElementById("sum")
    let tdElement = document.querySelectorAll("td:nth-child(2n)")
    let result = 0;
    for(let el of Array.from(tdElement)){
        result += Number(el.textContent)
    }
    resultSumElement.textContent = result
}