function attachGradientEvents() {
    let divElement = document.getElementById("gradient-box");
    let resultElement = document.getElementById('result');
    // let createTextElement = document.createTextElement;
    divElement.addEventListener("mousemove", function(e){
        let result = Math.floor((e.offsetX/e.srcElement.clientWidth )*100)
        resultElement.textContent=`${result}%`
    })
}