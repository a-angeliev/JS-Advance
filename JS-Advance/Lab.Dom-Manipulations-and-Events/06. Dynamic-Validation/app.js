function validate() {
    let inputEl = document.getElementById("email");
    inputEl.addEventListener('change', function(e){
        const validateEmail = (email) => {
            return String(email)
              .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-z\-0-9]+\.)+[a-z]{2,}))$/
              );
          };
        console.log(validateEmail(inputEl.value) );
        if(validateEmail(inputEl.value) == null){
           inputEl.setAttribute("class", "error")
            
        }else{
            inputEl.removeAttribute("class")
        }
    })
}