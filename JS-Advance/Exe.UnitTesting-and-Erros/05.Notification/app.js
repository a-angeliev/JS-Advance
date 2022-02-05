function notify(message) {
  let notificDivElement = document.getElementById("notification")
  notificDivElement.textContent = message
  notificDivElement.style.display = "block"
  notificDivElement.addEventListener('click',function(e){
    notificDivElement.style.display = "none"
  })
}