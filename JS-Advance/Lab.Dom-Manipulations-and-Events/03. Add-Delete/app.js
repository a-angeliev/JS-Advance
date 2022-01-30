function addItem() {
    let inputElement = document.getElementById("newItemText")
    let outputElement = document.getElementById("items")
    let newLiElement = document.createElement("li")
    newLiElement.textContent = inputElement.value
    let deleteElement = document.createElement("a")
    deleteElement.textContent = "[Delete]";
    deleteElement.href = "#"
    deleteElement.addEventListener('click', function(){
        newLiElement.remove()
    })
    newLiElement.appendChild(deleteElement)
    outputElement.appendChild(newLiElement)
}