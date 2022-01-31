function encodeAndDecodeMessages() {
    let encodeButtonElement = document.querySelector("#main div button");
    let decodeButtonElement = document.querySelector("#main div:nth-of-type(2) button");

    encodeButtonElement.addEventListener("click", function(e){
        let inputTextElement = document.querySelector("#main div textarea");
        let outputTextElement = document.querySelector("#main div:nth-of-type(2) textarea");
        let massage = inputTextElement.value
        let resultMassage = ""
        for(let i=0; i < massage.length; i++){
            resultMassage += String.fromCharCode(Number(massage[i].charCodeAt()) + 1)
            
        }
        outputTextElement.value = resultMassage
        inputTextElement.value = ""
    })

    decodeButtonElement.addEventListener("click", function(){
        let outputTextElement = document.querySelector("#main div:nth-of-type(2) textarea");
        let massage = outputTextElement.value
        let resultMassage = ""
        for(let i=0; i < massage.length; i++){
            resultMassage += String.fromCharCode(Number(massage[i].charCodeAt()) - 1)         
        }
        outputTextElement.value = resultMassage
    })
}