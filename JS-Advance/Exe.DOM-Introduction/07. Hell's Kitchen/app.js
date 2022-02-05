function solve() {
  document.querySelector("#btnSend").addEventListener("click", onClick);

  function onClick() {
    let textAreaElement = document.querySelector("#inputs textarea");
    let restaurantsArray = JSON.parse(textAreaElement.value);
    let restaurants = {};

    let totalSalary = 0;
    let currentBestSalary = 0;
    let avgSalary = 0;
    let workersCount = 0;

    for (let restaurant of restaurantsArray) {
      let restaurantInfo = restaurant.split(` - `);

      // Get restaurant name and if does not exist, create it in the obj, after that set property "employees: {}"
      let restaurantName = restaurantInfo.shift();
      if (!restaurants[restaurantName]) {
        restaurants[restaurantName] = {};
        restaurants[restaurantName].employees = {};
        restaurants[restaurantName].totalS = 0;
      } else {
        // if exists get current total Salary to calculate average correctly
        totalSalary = restaurants[restaurantName].totalS;
        currentBestSalary = restaurants[restaurantName].bestSalary;
        workersCount += Object.keys(
          restaurants[restaurantName].employees
        ).length;
      }
      restaurantInfo = restaurantInfo[0].split(", "); //current state of restaurantInfo is array of ["Name Salary, ...., Name Salary"]

      // Loop through each employee, check if has the best salary, set it if it does, then add it to obj "employees";
      for (let employee of restaurantInfo) {
        let [name, salary] = employee.split(` `);
        salary = Number(salary);
        totalSalary += salary;
        if (currentBestSalary < salary) {
          currentBestSalary = salary;
        }
        restaurants[restaurantName].employees[name] = salary;
      }
      workersCount += restaurantInfo.length;
      console.log(workersCount);
      avgSalary = totalSalary / workersCount;
      restaurants[restaurantName].averageSalary = avgSalary;
      restaurants[restaurantName].bestSalary = currentBestSalary;
      restaurants[restaurantName].totalS += totalSalary;

      totalSalary = 0;
      currentBestSalary = 0;
      workersCount = 0;
    }

    // calculate average salary, because if we do it while working with the input, calculations will be wrong, if we receive same restaurant 2nd time

    // Sorting by average salary. Object.entries will return ["RestaurantName[0], Object[1..]: {employees:{..}, avgSalary: x, bestSalary: x}[..1]"]
    let bestRestaurant = Object.entries(restaurants).sort((a, b) => {
      let aSalary = a[1].averageSalary;
      let bSalary = b[1].averageSalary;
      return bSalary - aSalary;
    });
    // best restaurant result
    document.querySelector("#outputs p").textContent = `Name: ${
      bestRestaurant[0][0]
    } Average Salary: ${bestRestaurant[0][1].averageSalary.toFixed(
      2
    )} Best Salary: ${bestRestaurant[0][1].bestSalary.toFixed(2)}`;

    //employees sort and result
    let sortedEmployees = Object.entries(bestRestaurant[0][1].employees).sort(
      (a, b) => b[1] - a[1]
    );
    let print = "";
    while (sortedEmployees.length > 0) {
      let [name, salary] = sortedEmployees.shift();
      print += `Name: ${name} With Salary: ${salary} `;
    }
    document.querySelector("#workers p").textContent = print;
  }
}
