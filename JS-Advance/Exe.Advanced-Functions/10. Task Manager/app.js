function solve() {
    let inputTaskElement = document.querySelector("#task")
    let inputDiscElement = document.querySelector("#description")
    let inputDateElement = document.querySelector("#date")
    let addButtonElement = document.querySelector("#add")
    let openDivElement = document.querySelector("section:nth-of-type(2) div:nth-of-type(2)")
    let inProgresDivElement = document.querySelector("section:nth-of-type(3) #in-progress")
    let completeDivElement = document.querySelector("section:nth-of-type(4) div:nth-of-type(2)")

    addButtonElement.addEventListener("click", function(e){
        let task = inputTaskElement.value
        let discription = inputDiscElement.value
        let date = inputDateElement.value
        e.preventDefault()
        if(task, discription, date){
            let createStartButton = document.createElement("button")
            createStartButton.setAttribute("class", "green")
            createStartButton.textContent = "Start"

            let createDeleteButton = document.createElement("button")
            createDeleteButton.setAttribute("class", "red")
            createDeleteButton.textContent = "Delete"

            let createDivElement = document.createElement("div")
            createDivElement.setAttribute("class", "flex")
            createDivElement.appendChild(createStartButton)
            createDivElement.appendChild(createDeleteButton)

            let createH3Element = document.createElement("h3")
            createH3Element.textContent = task

            let createpDiscriptionElement = document.createElement("p")
            createpDiscriptionElement.textContent = `Description: ${discription}`

            let createpDateElement = document.createElement("p")
            createpDateElement.textContent = `Due Date: ${date}`

            let createArctElement = document.createElement("article")
            createArctElement.appendChild(createH3Element)
            createArctElement.appendChild(createpDiscriptionElement)
            createArctElement.appendChild(createpDateElement)
            createArctElement.appendChild(createDivElement)

            openDivElement.appendChild(createArctElement)

            createDeleteButton.addEventListener("click", function(e){
                createArctElement.remove()
            })

            createStartButton.addEventListener("click", function(e){
                inProgresDivElement.appendChild(createArctElement)
                createStartButton.remove()

                let createFinishButton = document.createElement("button")
                createFinishButton.setAttribute("class", "orange")
                createFinishButton.textContent = "Finish"
                createDivElement.appendChild(createFinishButton)

                createFinishButton.addEventListener("click", function(){
                    completeDivElement.appendChild(createArctElement)
                    createDivElement.remove()
                    // createFinishButton.remove()
                    // createDeleteButton.remove()
                })
            })
        }
    })
}