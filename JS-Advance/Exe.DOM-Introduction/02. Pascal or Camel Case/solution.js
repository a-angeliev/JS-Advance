function solve() {
  let text = document.getElementById("text").value;
  let convention = document.getElementById("naming-convention").value;
  let resultElement = document.getElementById("result")
  let resultString = ""
  console.log(text.length);
  if(convention == "Camel Case"){
    for(let i =0; i < text.length; i++){
        if(i==0){
          resultString += text[i].toLowerCase()
        }else if(text[i] == " "){
          i++
          resultString += text[i].toUpperCase()
        }else{
          resultString += text[i].toLowerCase()
        }
    }
  }else if(convention == "Pascal Case"){
    for(let i =0; i < text.length; i++){
      if(i==0){
        resultString += text[i].toUpperCase()
      }else if(text[i] == " "){
        i++
        resultString += text[i].toUpperCase()
      }else{
        resultString += text[i].toLowerCase()
      }
  }
  }else{
    resultString = "Error!"
  }
  resultElement.textContent = resultString
}