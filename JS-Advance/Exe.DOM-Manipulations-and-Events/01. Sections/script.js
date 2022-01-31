function create(words) {
   let outputElement = document.getElementById("content")
   for(let el of words){
      let createDivElement = document.createElement('div')
      let createPaElement = document.createElement("p")
      createPaElement.textContent = el
      createPaElement.style.display = "none"
      createDivElement.appendChild(createPaElement)
      createDivElement.addEventListener("click", function(e){
         e.currentTarget.children[0].style.display = "inline"
      })
      outputElement.appendChild(createDivElement)
   }
}