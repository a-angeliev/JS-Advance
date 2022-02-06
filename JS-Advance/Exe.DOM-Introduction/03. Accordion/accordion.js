function toggle() {
  let spanElement = document.querySelectorAll("span")[0];
  let divTextElement = document.getElementById("extra");
  if (spanElement.textContent == "More") {
    spanElement.textContent = "Less";
    divTextElement.style.display = "block";
  } else {
    spanElement.textContent = "More";
    divTextElement.style.display = "none";
  }
}
