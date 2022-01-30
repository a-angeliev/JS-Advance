function focused() {
    let divElement = document.querySelectorAll("div div input");
    for(let el of divElement){
        el.addEventListener("focus", function(e){
            console.log(e.currentTarget.parentNode);
            e.currentTarget.parentNode.setAttribute("class", "focused")
        })
        el.addEventListener("blur", function(e){
            e.currentTarget.parentNode.style.background = "";
            e.currentTarget.parentNode.removeAttribute("class");
        })
    }
}