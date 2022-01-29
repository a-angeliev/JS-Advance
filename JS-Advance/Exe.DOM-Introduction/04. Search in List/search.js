function search() {
   let ulElements = Array.from(document.querySelectorAll("#towns li"));
   let searchTextElement = document.querySelector("#searchText")
   let resultElement = document.getElementById("result")
   let matches = 0
   for(let el of ulElements){
      if(el.textContent.toLowerCase().includes(searchTextElement.value.toLowerCase())){
         matches ++
         el.style.textDecoration = "underline"
         el.style.textDecoration = "bold"
      }else{
         el.style.textDecoration = "none"
      }
   }
   searchTextElement.value = ''
   resultElement.textContent = `${matches} matches found`
}
