function solve() {
   let addElements = document.getElementsByClassName("add-product")
   let outputElement = document.querySelector("textarea")
   let checkoutElement = document.querySelector(".checkout")
   

   let uniqueProducts = []
   let totalPrice = 0

   function add(e){
         let productName = e.currentTarget.parentNode.parentNode.querySelector(".product-details div").textContent
         console.log(productName);
         let productPrice = e.currentTarget.parentNode.parentNode.querySelector(".product-line-price").textContent   
         outputElement.textContent += `Added ${productName} for ${Number(productPrice).toFixed(2)} to the cart.\n`
         if(uniqueProducts.includes(productName) == false){
            uniqueProducts.push(productName)
         }
         totalPrice+= Number(productPrice)
   }
   for(let el of Array.from(addElements)){
      el.addEventListener("click", add)
   }

   checkoutElement.addEventListener("click", function(e){
      for(let el of Array.from(addElements)){
         //el.removeEventListener("click", add)
         el.disabled = true
      
      }
      outputElement.textContent += `You bought ${uniqueProducts.join(", ")} for ${totalPrice.toFixed(2)}.`
      checkoutElement.disabled = true
   })
}