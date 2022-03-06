function solve() {
  let arriveButton = document.getElementById("arrive");
  let departButton = document.getElementById("depart");
  let url = "http://localhost:3030";
  let infoElement = document.querySelector(".info");

  function depart() {
    if (infoElement.textContent == "Not Connected") {
      fetch(`${url}/jsonstore/bus/schedule/depot`)
        .then((res) => res.json())
        .then((info) => {
          localStorage.setItem("name", info.name);
          localStorage.setItem("next", info.next);
          infoElement.textContent = `Next stop ${info.name}`;
        });
    } else {
      fetch(`${url}/jsonstore/bus/schedule/${localStorage.getItem("next")}`)
        .then((res) => res.json())
        .then((info) => {
          localStorage.setItem("name", info.name);
          localStorage.setItem("next", info.next);

          infoElement.textContent = `Next stop ${info.name}`;
        })
        .catch(err => {
          infoElement.textContent = "Error";
          arriveButton.disabled = true;
          departButton.disabled = true;
        });
    }
    
    arriveButton.disabled = false;
    departButton.disabled = true;
  }

  function arrive() {
    infoElement.textContent = `Arriving at ${localStorage.getItem("name")}`;
    arriveButton.disabled = true;
    departButton.disabled = false;
  }

  return {
    depart,
    arrive,
  };
}

let result = solve();
