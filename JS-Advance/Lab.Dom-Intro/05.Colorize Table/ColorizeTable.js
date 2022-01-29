function colorize() {
    let tableRowElements = document.querySelectorAll("tr:nth-child(2n)")
    for(let el of Array.from(tableRowElements)){
        el.style.backgroundColor = "teal"
    }
}