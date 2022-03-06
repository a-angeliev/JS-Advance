function attachEvents() {
  let loadURL = "http://localhost:3030/jsonstore/blog/posts";
  let commentsURL = `http://localhost:3030/jsonstore/blog/comments`;
  let loadButton = document.getElementById("btnLoadPosts");
  let postsSelection = document.getElementById("posts");
  let viewButton = document.getElementById("btnViewPost");
  let postTitle = document.getElementById("post-title");

  viewButton.addEventListener("click", (e) => {
    let selection = document.getElementById("posts");
    let pElement = document.getElementById("post-body");

    fetch(`${loadURL}/${selection.value}`)
      .then((res) => res.json())
      .then((data) => {
        postTitle.textContent = data.title.toUpperCase();
        pElement.textContent = data.body;
        getComments(data.id);
      })
      .catch((err) => console.log(err));
  });

  loadButton.addEventListener("click", (e) => {
    postsSelection.innerHTML = "";
    fetch(loadURL)
      .then((res) => res.json())
      .then((data) => {
        Object.entries(data).forEach((x) => {
          let option = document.createElement("option");
          option.textContent = x[1].title.toUpperCase();
          option.setAttribute("value", `${x[1].id}`);
          postsSelection.appendChild(option);
        });
      })
      .catch((err) => console.log(err));
  });

  function getComments(id) {
    fetch(commentsURL)
      .then((res) => res.json())
      .then((data) => {
        let postComments = document.getElementById("post-comments");
        postComments.textContent = "";
        comments = Object.entries(data).filter((x) => x[1].postId == id);
        comments.forEach((x) => {
          let li = document.createElement("li");
          li.setAttribute("id", x.id);
          li.textContent = x[1].text;
          postComments.appendChild(li);
        });
      })
      .catch((err) => console.log(err));
  }
}

attachEvents();
