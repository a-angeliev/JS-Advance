function addItem() {
    let inputElement = document.getElementById("newItemText")
    let outputElement = document.getElementById("items")
    let newLiElement = document.createElement("li")
    newLiElement.textContent = inputElement.value
    outputElement.appendChild(newLiElement)
}