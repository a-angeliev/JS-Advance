function solve() {
    let inputElement = document.querySelector("textarea")
    let generateButton = document.querySelector("button")
    let tabbleBodyElement =document.querySelector(".table tbody")
    let buyButtonElement = document.querySelector("button:nth-of-type(2)")
    let outputElement = document.querySelector('textarea:nth-of-type(2)')

    generateButton.addEventListener("click", function(e){

      
      let inputObj = JSON.parse(inputElement.value);
      for(let el of inputObj){
        let createdTrElement = document.createElement("tr");
        let createTd1 = document.createElement("td");
        let createSrc = document.createElement("img");
        createSrc.setAttribute("src", `${el.img}`);
        createTd1.appendChild(createSrc);
        createdTrElement.appendChild(createTd1);

        let crTd2 = document.createElement("td");
        let crP2 = document.createElement("p");
        crP2.textContent = el.name;
        crTd2.appendChild(crP2);
        createdTrElement.appendChild(crTd2);

        let crTd3 = document.createElement("td");
        let crP3 = document.createElement("p");
        crP3.textContent = Number(el.price);
        crTd3.appendChild(crP3);
        createdTrElement.appendChild(crTd3);

        let crTd4 = document.createElement("td");
        let crP4 = document.createElement("p");
        crP4.textContent = Number(el.decFactor);
        crTd4.appendChild(crP4);
        createdTrElement.appendChild(crTd4);

        let crTd5 = document.createElement("td");
        let inp5 = document.createElement("input");
        inp5.setAttribute("type", "checkbox");
        crTd5.appendChild(inp5);
        createdTrElement.appendChild(crTd5);
        tabbleBodyElement.appendChild(createdTrElement);
      }
      
    })

    buyButtonElement.addEventListener("click", function(e){
      let tableRowElements = Array.from(document.querySelectorAll("tbody tr"))
      let funitureNames = [];
      let totalPrice = 0;
      let decorationFactor = 0;
      for(let el of tableRowElements){
        let currentCheckboxElement = el.querySelector('td:nth-of-type(5)')
        if(currentCheckboxElement.querySelector("input").checked == true){
          funitureNames.push(el.querySelector("td p").textContent)
          totalPrice += Number(el.querySelector("td:nth-of-type(3) p").textContent)
          decorationFactor += Number(el.querySelector("td:nth-of-type(4) p").textContent)
        };
      }
      decorationFactor = decorationFactor/funitureNames.length
      outputElement.value += `Bought furniture: ${funitureNames.join(", ")}\n`
      outputElement.value += `Total price: ${totalPrice.toFixed(2)}\n`
      outputElement.value += `Average decoration factor: ${decorationFactor}`
    })
    

}