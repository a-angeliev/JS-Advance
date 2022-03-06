function attachEvents() {
    let submitButton = document.getElementById('submit')
    let locationInput = document.getElementById('location')
    let forecastDiv = document.getElementById('forecast')
    let symbolMap = {
        "Sunny": "&#x2600;",
        "Partly sunny": "&#x26C5;",
        "Overcast": "&#x2601;", 
        "Rain": "&#x2614;",
        "Degrees": "&#176;", 

    }
    let locationURL = 'http://localhost:3030/jsonstore/forecaster/locations'
    submitButton.addEventListener("click", (e)=>{
        fetch(locationURL)
        .then(res => res.json())
        .then(data => {
            let locationInfo = Object.entries(data).filter(x => x[1].name == locationInput.value)
            if(locationInfo){
                let code = locationInfo[0][1].code
                today(code)
                upcoming(code)
            }else{
                forecastDiv.innerHTML = "Error"
            }
        })  
        .catch(err => forecastDiv.innerHTML = "Error")
    })

    function upcoming(code){
        let url = `http://localhost:3030/jsonstore/forecaster/upcoming/${code}`

        fetch(url)
        .then(res => res.json())
        .then(result => {
            let upComingDiv = document.getElementById('upcoming')
            let createDivForecast = document.createElement('div')
            upComingDiv.appendChild(createDivForecast)
            result.forecast.forEach(x => createDivForecast.innerHTML +=`
            <span class= "upcoming">
                <span class = "symbol">${symbolMap[x.condition]}</span>
                <span class = "forecast-data">${x.low}°/${x.high}°</span>
                <span class = "forecast-data">${x.condition}</span>
            </span>
            `)
        })
    }

    function today(code){
        let url = `http://localhost:3030/jsonstore/forecaster/today/${code}`

        fetch(url)
        .then(res => res.json())
        .then(result => {
            forecastDiv.style.display = 'block'
            let currentDiv = document.getElementById('current')
            let createForcastsDiv = document.createElement('div')
            createForcastsDiv.classList.add("forecasts")
            
            let createSpanCondition = document.createElement('span')
            createSpanCondition.classList.add("condition", "symbol")
            createSpanCondition.innerHTML = `${symbolMap[result.forecast.condition]}`

            let createSpan = document.createElement('span')
            createSpan.classList.add('condition')

            let createLocationSpan = document.createElement('span')
            createLocationSpan.classList.add('forecast-data')
            createLocationSpan.textContent = result.name

            let createTempSpan = document.createElement('span')
            createTempSpan.classList.add('forecast-data')
            createTempSpan.textContent = `${result.forecast.low}/${result.forecast.high}`

            let createCondiSpan = document.createElement('span')
            createCondiSpan.classList.add('forecast-data')
            createCondiSpan.textContent = result.forecast.condition

            createSpan.appendChild(createLocationSpan)
            createSpan.appendChild(createTempSpan)
            createSpan.appendChild(createCondiSpan)

            createForcastsDiv.appendChild(createSpanCondition)
            createForcastsDiv.appendChild(createSpan)

            currentDiv.appendChild(createForcastsDiv)
            
        })

    }

}

attachEvents();