function solve() {
    let nameElement = document.querySelector("#container input:nth-of-type(1)")
    let hallElement = document.querySelector("#container input:nth-of-type(2)")
    let priceElement = document.querySelector("#container input:nth-of-type(3)")
    let onScreenButton = document.querySelector("#container button")
    let MoveUlElement = document.querySelector("#movies ul")
    let buttonCleareElement = document.querySelector("#archive button")

    function isNumeric(value) {
        if(!isNaN(value) && value != ""){
            return true
        }else return false
    }

    

    buttonCleareElement.addEventListener("click", function (e) {
        let ulArchiveElement = Array.from(document.querySelectorAll("#archive ul li"))
        ulArchiveElement.forEach(x => x.remove())
    })

    onScreenButton.addEventListener("click", function(e) {
        e.preventDefault()
        if(nameElement.value != "" && hallElement.value != "" && isNumeric(priceElement.value)){
            let createButton = document.createElement("button")
            createButton.textContent = `Archive`

            let createInput = document.createElement("input")
            createInput.setAttribute("placeholder", "Tickets Sold")

            let createDivStrong = document.createElement("strong")
            createDivStrong.textContent = Number(priceElement.value).toFixed(2)
            
            let createDiv = document.createElement("div")
            createDiv.appendChild(createDivStrong)
            createDiv.appendChild(createInput)
            createDiv.appendChild(createButton)

            let createSpan= document.createElement("span")
            createSpan.textContent = nameElement.value
            
            let createStrongHall = document.createElement("strong")
            createStrongHall.textContent = `Hall: ${hallElement.value}`

            let createLi = document.createElement("li")
            createLi.appendChild(createSpan)
            createLi.appendChild(createStrongHall)
            createLi.appendChild(createDiv)

            MoveUlElement.appendChild(createLi)
            nameElement.value = ""
            hallElement.value = ""
            priceElement.value = ""

            createButton.addEventListener("click",function (e) {
                if(isNumeric(createInput.value)){
                    let archiveSelecetionElement = document.querySelector("#archive ul")
                    let createArchiveSpan = document.createElement("span")
                    createArchiveSpan.textContent = createSpan.textContent
                    
                    let createArchiveStrong = document.createElement("strong")
                    createArchiveStrong.textContent = `Total amount: ${(Number(createDivStrong.textContent)* Number(createInput.value)).toFixed(2)}`

                    let createArchiveButton = document.createElement("button")
                    createArchiveButton.textContent = "Delete"
                    
                    let createArchiveLi = document.createElement("li")
                    createArchiveLi.appendChild(createArchiveSpan)
                    createArchiveLi.appendChild(createArchiveStrong)
                    createArchiveLi.appendChild(createArchiveButton)

                    archiveSelecetionElement.appendChild(createArchiveLi)
                    createLi.remove()

                    createArchiveButton.addEventListener("click", function (e) {
                        createArchiveLi.remove()
                    })
                }
            })
        } 
    })
}
