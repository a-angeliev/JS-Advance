function addItem() {
    let textInputElement = document.getElementById("newItemText")
    let valueInputElement = document.getElementById("newItemValue")
    let selectMenuElement = document.getElementById("menu")
    let newOptionElement = document.createElement("option")
    newOptionElement.textContent = textInputElement.value
    newOptionElement.setAttribute("value", valueInputElement.value)
    selectMenuElement.appendChild(newOptionElement)
    textInputElement.value = ""
    valueInputElement.value = ""

}