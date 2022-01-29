function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let searchText = document.getElementById('searchField').value
      let rowElements = Array.from(document.querySelectorAll("tbody tr"));
      console.log(searchText);
      for(let row of rowElements){
         if(row.textContent.toLowerCase().includes(searchText.toLowerCase())){
            row.classList.add("select")
         }else{
            row.classList.remove("select")
         }
      }
   }
}