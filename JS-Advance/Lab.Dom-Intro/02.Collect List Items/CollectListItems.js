function extractText() {
    let ulElement = document.getElementById("items")
    let resultElement = document.getElementById("result")
    let result = ''
    let ulElementArray = Array.from(ulElement.children)
    for(let el of ulElementArray){

        result += el.textContent + "\n"
    }
    resultElement.textContent =result
    
}