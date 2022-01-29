function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
      let inputText = JSON.parse(document.querySelector("#inputs textarea").value)
      let result = []
      let avrSalary = []
      let bigSalary = 0
      let currentObj = {}
      for(let el of inputText){
         [name, workers] = el.split(" - ")
         workers = workers.split(", ")
         console.log(name);
         console.log(workers);
         currentObj.name = name
         for(let el of workers){
            [workerName, salary] = el.split(" ")
            if(salary > bigSalary){
               bigSalary = salary
            }
            console.log(workerName);
            console.log(salary);
            currentObj.workerName = Number(salary)
         }
         
      }
      console.log(typeof inputText);
      console.log(Array.from(inputText));
           
   }
}