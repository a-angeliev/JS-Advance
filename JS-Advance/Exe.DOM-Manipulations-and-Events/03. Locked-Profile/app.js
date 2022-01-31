function lockedProfile() {
    let divElements = Array.from(document.getElementsByClassName("profile"))
    for(let el of divElements){
        let button = el.querySelector("button");
        button.addEventListener("click", function(e){
            let radioButton = e.currentTarget.parentNode.querySelector("input:nth-of-type(2)");
            let hiddenDivElement = e.currentTarget.parentNode.querySelector("div")
            if(radioButton.checked){
                if(button.textContent == "Show more"){
                    button.textContent = "Hide it"
                radioButton.checked = false;
                hiddenDivElement.style.display = "inline"
                let radioButtonLock = e.currentTarget.parentNode.querySelector("input");
                radioButtonLock.checked = true
                }else{
                    button.textContent ="Show more";
                    hiddenDivElement.style.display = "none"
                }
            }
        })

    }
}