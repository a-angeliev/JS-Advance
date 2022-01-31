function solve() {
  let result = 0
  let onClick = document.querySelector("section ul li:nth-of-type(2) div")
  let clickMouse = document.querySelector("section ul li:nth-of-type(3) div")
  let toStringEl = document.querySelector("section:nth-of-type(2) ul li:nth-of-type(2) div")
  let stringi = document.querySelector("section:nth-of-type(2) ul li:nth-of-type(3) div")
  let api = document.querySelector("section:nth-of-type(3) ul li:nth-of-type(2) div")
  let dom = document.querySelector("section:nth-of-type(3) ul li:nth-of-type(3) div")


  onClick.addEventListener("click",function(e){
    let section1Element = document.querySelector("section:nth-of-type(1)")
    let section2Element = document.querySelector("section:nth-of-type(2)")
    section1Element.style.display = "none"
    result += 1
    section2Element.style.display = "block"
  })
  clickMouse.addEventListener("click",function(e){
    let section1Element = document.querySelector("section:nth-of-type(1)")
    let section2Element = document.querySelector("section:nth-of-type(2)")
    section1Element.style.display = "none"
    section2Element.style.display = "block"
  })
  toStringEl.addEventListener("click",function(e){
    let section2Element = document.querySelector("section:nth-of-type(2)")
    let section3Element = document.querySelector("section:nth-of-type(3)")
    section2Element.style.display = "none"
    section3Element.style.display = "block"
    console.log(result);
  })
  stringi.addEventListener("click",function(e){
    let section2Element = document.querySelector("section:nth-of-type(2)")
    let section3Element = document.querySelector("section:nth-of-type(3)")
    section2Element.style.display = "none"
    result += 1
    section3Element.style.display = "block"
  })
  api.addEventListener("click",function(e){
    let section3Element = document.querySelector("section:nth-of-type(3)")
    let resultElement = document.querySelector("#results li h1")
    section3Element.style.display = "none"
    result += 1
    console.log(resultElement);
    resultElement.parentNode.parentNode.style.display = "block"
    if(result == 3){
      resultElement.textContent = "You are recognized as top JavaScript fan!"
    }else{
      resultElement.textContent = `You have ${result} right answers`
    }
  })
  dom.addEventListener("click",function(e){
    let section3Element = document.querySelector("section:nth-of-type(3)")
    let resultElement = document.querySelector("#results li h1")
    section3Element.style.display = "none"
    resultElement.parentNode.parentNode.style.display = "block"
    resultElement.textContent = `You have ${result} right answers`
  })

}
