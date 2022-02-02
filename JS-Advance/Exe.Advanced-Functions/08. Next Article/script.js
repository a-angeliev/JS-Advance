function getArticleGenerator(articles) {
    let input = articles
    let curIndex = 0
    return function() {
        let divElement = document.querySelector("#content")
        if(curIndex != input.length){
            let aElement = document.createElement("article")
            let curElement = input[curIndex]
            aElement.textContent += curElement
            divElement.appendChild(aElement)
            curIndex ++;
        }
        
    }
}
