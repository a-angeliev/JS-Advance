function solution() {
  let mainElement = document.getElementById("main");
  let listURL = "http://localhost:3030/jsonstore/advanced/articles/list";

  fetch(listURL)
    .then((res) => res.json())
    .then((data) => {
      data.forEach((x) => {
        let createDiv = document.createElement("div");
        createDiv.classList.add("accordion");

        let createHeadDiv = document.createElement("div");
        createHeadDiv.classList.add("head");

        let createSpan = document.createElement("span");
        createSpan.textContent = `${x.title}`;

        let createbutton = document.createElement("button");
        createbutton.classList.add("button");
        createbutton.setAttribute("id", `${x._id}`);
        createbutton.textContent = "More";

        createbutton.addEventListener("click", (e) => {
          let event = e.currentTarget;
          getInfo(e.currentTarget.id, event);
        });

        let createExtraDiv = document.createElement("div");
        createExtraDiv.classList.add("extra");

        createHeadDiv.appendChild(createSpan);
        createHeadDiv.appendChild(createbutton);

        createDiv.appendChild(createHeadDiv);
        createDiv.appendChild(createExtraDiv);

        mainElement.appendChild(createDiv);
      });
    })
    .catch((err) => console.log(err));

  function getInfo(id, e) {
    let url = `http://localhost:3030/jsonstore/advanced/articles/details/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        let div = e.parentNode.parentNode.querySelector(".extra");
        if (e.textContent == "More") {
          let p = document.createElement("p");

          p.textContent = data.content;
          div.appendChild(p);

          div.style.display = "block";
          e.textContent = "Less";
        } else {
          div.innerHTML = "";
          div.style.display = "none";
          e.textContent = "More";
        }
      })
      .catch((err) => console.log(err));
  }
}
solution();
