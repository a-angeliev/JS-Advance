function solve() {
  let inputText = document.getElementById('input').value
  let inputTextArray = inputText.split(".")
  let indexs = []
  let resultString = '<p>'
  for(let el of inputTextArray){
    if(el != ""){
        indexs.push(el)
    }
  }
  for(let i = 0; i<indexs.length; i++){
    if(i == 0){
      resultString += `${indexs[i]}.`
    }else if(i%3 != 0){
      resultString += `${indexs[i]}.`
    }else{
      resultString += '</p><p>'
      resultString += `${indexs[i]}.`
    }

  }
  resultString += "</p>"

  let outputElement = document.getElementById("output")
  outputElement.innerHTML = resultString
}