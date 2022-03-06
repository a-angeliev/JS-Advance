function getInfo() {
  let sotpIdInput = document.getElementById("stopId");
  let stopNameElement = document.getElementById("stopName");
  let busesElement = document.getElementById("buses");
  let url = "http://localhost:3030";

  let stopId = sotpIdInput.value;
  fetch(`${url}/jsonstore/bus/businfo/${stopId}`)
    .then((res) => res.json())
    .then((businfo) => {
      busesElement.innerHTML = "";
      stopNameElement.textContent = `${businfo.name}`;
      Object.entries(businfo.buses).forEach(
        (x) =>
          (busesElement.innerHTML += `<li>Bus ${x[0]} arrives in ${x[1]} minutes</li>\n`)
      );
    })
    .catch((err) => {
      busesElement.innerHTML = "";
      stopNameElement.textContent = "Error";
    });
}
