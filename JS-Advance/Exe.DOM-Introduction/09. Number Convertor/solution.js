function solve() {
  let selectMenuElement = document.querySelectorAll("#selectMenuTo")[0];
  let element = document.createElement("option");
  element.value = "binary";
  element.text = "Binary";
  selectMenuElement.appendChild(element);

  let element1 = document.createElement("option");
  element1.value = "hexadecimal";
  element1.text = "Hexadecimal";
  selectMenuElement.appendChild(element1);

  let buttonElement = document.querySelector("button");
  buttonElement.addEventListener("click", function () {
    let inputNumberElement = document.getElementById("input");
    let outputElement = document.getElementById("result");
    let selectedOption = document.getElementById("selectMenuTo").value;
    if (selectedOption == "binary") {
      outputElement.value = Number(inputNumberElement.value).toString(2);
    } else if (selectedOption == "hexadecimal") {
      outputElement.value = Number(inputNumberElement.value)
        .toString(16)
        .toUpperCase();
    }
  });
}
