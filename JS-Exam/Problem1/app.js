function solve() {
  let hireButton = document.getElementById("add-worker");
  let fnameElement = document.getElementById("fname");
  let lnameElement = document.getElementById("lname");
  let emailElement = document.getElementById("email");
  let birthElement = document.getElementById("birth");
  let positionElement = document.getElementById("position");
  let salaryElement = document.getElementById("salary");
  let resultTable = document.getElementById("tbody")
    let budgetElement =document.getElementById("sum")
  hireButton.addEventListener("click", (e) => {
    e.preventDefault();
    
    if (
      fnameElement.value &&
      lnameElement.value &&
      emailElement.value &&
      birthElement.value &&
      positionElement.value &&
      salaryElement.value
    ) {
        let createTr = document.createElement("tr")
        let createFnameTd = document.createElement("td")
        let createLnameTd = document.createElement("td")
        let createEmailTd = document.createElement("td")
        let createBirthTd = document.createElement("td")
        let createPositionTd = document.createElement("td")
        let createSalaryTd = document.createElement("td")
        let createTdbutton = document.createElement("td")
        let createButtonFire = document.createElement("button")
        let createButtonEdit = document.createElement("button")

        createFnameTd.textContent = fnameElement.value
        createLnameTd.textContent = lnameElement.value
        createEmailTd.textContent = emailElement.value
        createBirthTd.textContent = birthElement.value
        createPositionTd.textContent = positionElement.value
        createSalaryTd.textContent = salaryElement.value
        createButtonEdit.textContent = "Edit"
        createButtonFire.setAttribute("class", "fired")
        createButtonEdit.setAttribute("class", "edit")
        createButtonFire.textContent = "Fire"

        createTr.appendChild(createFnameTd)
        createTr.appendChild(createLnameTd)
        createTr.appendChild(createEmailTd)
        createTr.appendChild(createBirthTd)
        createTr.appendChild(createPositionTd)
        createTr.appendChild(createSalaryTd)
        
        createTdbutton.appendChild(createButtonFire)
        createTdbutton.appendChild(createButtonEdit)
        createTr.appendChild(createTdbutton)
        resultTable.appendChild(createTr)

        budgetElement.textContent = (Number(budgetElement.textContent) + Number(salaryElement.value)).toFixed(2)
        fnameElement.value = ""
        lnameElement.value = ""
        emailElement.value = ""
        birthElement.value = ""
        positionElement.value = ""
        salaryElement.value = ""


        createButtonEdit.addEventListener("click", (e)=>{
            let i = 0
            for(let el of Array.from(createTr.childNodes)){
                if(i==0){
                    fnameElement.value = el.textContent
                }else if(i == 1){
                    lnameElement.value = el.textContent
                }else if(i == 2){
                    emailElement.value = el.textContent
                }else if(i == 3){
                    birthElement.value = el.textContent
                }else if(i == 4){
                    positionElement.value = el.textContent
                }else if(i == 5){
                    salaryElement.value = el.textContent
                }
                i++
            }
            budgetElement.textContent = (Number(budgetElement.textContent) - Number(salaryElement.value)).toFixed(2)
            console.log(createTr.childNodes);
            createTr.remove()
        })
        
        createButtonFire.addEventListener("click", (e)=>{
            let i = 0
            let salary = 0
            for(let el of Array.from(createTr.childNodes)){
                if(i == 5){
                    salary = el.textContent
                }
                i++
            }
            budgetElement.textContent = (Number(budgetElement.textContent) - Number(salary)).toFixed(2)
            createTr.remove()
        })
    }
  });
}
solve();
