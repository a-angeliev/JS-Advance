window.addEventListener("load", solve);

function solve() {
  let genreInput = document.getElementById("genre");
  let nameInput = document.getElementById("name");
  let authorInput = document.getElementById("author");
  let dateInput = document.getElementById("date");
  let addButton = document.getElementById("add-btn");
  let colectionDiv = document.querySelector("#all-hits div");

  addButton.addEventListener("click", (e) => {
    e.preventDefault();
    if (
      (genreInput.value && nameInput.value && authorInput.value && dateInput.value)
    ) {
      let deleteButton = document.createElement("button");
      let likeButton = document.createElement("button");
      let saveButton = document.createElement("button");

      saveButton.textContent = "Save song";
      saveButton.setAttribute("class", "save-btn");

      likeButton.textContent = "Like song";
      likeButton.setAttribute("class", "like-btn");

      deleteButton.textContent = "Delete";
      deleteButton.setAttribute("class", "delete-btn");

      let dateH3 = document.createElement("h3");
      dateH3.textContent = `Date: ${dateInput.value}`;

      let authorH2 = document.createElement("h2");
      authorH2.textContent = `Author: ${authorInput.value}`;

      let nameH2 = document.createElement("h2");
      nameH2.textContent = `Name: ${nameInput.value}`;

      let genreH2 = document.createElement("h2");
      genreH2.textContent = `Genre: ${genreInput.value}`;

      let img = document.createElement("img");
      img.setAttribute("src", "./static/img/img.png");

      let divElement = document.createElement("div");
      divElement.setAttribute("class", "hits-info");

      divElement.appendChild(img);
      divElement.appendChild(genreH2);
      divElement.appendChild(nameH2);
      divElement.appendChild(authorH2);
      divElement.appendChild(dateH3);
      divElement.appendChild(saveButton);
      divElement.appendChild(likeButton);
      divElement.appendChild(deleteButton);

      colectionDiv.appendChild(divElement);

      likeButton.addEventListener("click", (e) => {
        let likesElement = document.querySelector(".likes p");
        let likes = Number(likesElement.textContent.split(" ")[2]);
        likes += 1;
        likesElement.textContent = `Total Likes: ${likes}`;
        e.target.setAttribute("disabled", true);
      });

      saveButton.addEventListener("click", (e) => {
        saveButton.remove();
        likeButton.remove();
        let saveSection = document.querySelector(".saved-container");
        saveSection.appendChild(divElement);
      });

      deleteButton.addEventListener("click", (e) => {
        divElement.remove();
      });
      genreInput.value = ""
      authorInput.value = ""
      nameInput.value = ""
      dateInput.value = ""
    }
  });
}
