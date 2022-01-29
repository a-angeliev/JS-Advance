function generateReport() {
    let neededIndex = []
    let checkboxsNames = []
    let checkboxs = document.querySelectorAll("thead tr th input")
    let i = 0
    let result = []
    console.log(checkboxs);
    for(let el of checkboxs){
        if(el.checked){
            neededIndex.push(i);
            checkboxsNames.push(el.name)
        }
        i++
    }
    let tbodyInfoElemets = document.querySelectorAll("tbody tr")
    for(let row of tbodyInfoElemets){
        let currnetObj = {}
        for(let i=0; i<neededIndex.length; i++){
            currnetObj[checkboxsNames[i]] = Array.from(row.cells)[neededIndex[i]].textContent
        }
        result.push(currnetObj)
    }
    let outputElement = document.getElementById("output")
    outputElement.textContent = JSON.stringify(result)
}