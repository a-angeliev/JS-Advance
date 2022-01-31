function attachEventsListeners() {
    let buttonElements = document.querySelectorAll('[type="button"]')
    for(let el of buttonElements){
        let inputDays = document.getElementById("days");
        let inputHours = document.getElementById("hours");
        let inputMin = document.getElementById("minutes");
        let inputSec = document.getElementById("seconds");
        if(el.id == "daysBtn"){
            el.addEventListener("click", function(e){
                inputHours.value = Number(inputDays.value)*24
                inputMin.value = Number(inputDays.value)*1440
                inputSec.value = Number(inputDays.value)*86400
            })
        }else if(el.id == "hoursBtn"){
            el.addEventListener("click", function(e){
                inputDays.value = Number(inputHours.value)/24
                inputMin.value = Number(inputHours.value)*60
                inputSec.value = Number(inputHours.value)*60*60
            })
        }else if(el.id == "minutesBtn"){
            el.addEventListener("click", function(e){
                inputDays.value = Number(inputMin.value)/24/60
                inputHours.value = Number(inputMin.value)/60
                inputSec.value = Number(inputMin.value)*60
            })
        }else if(el.id == "secondsBtn"){
            el.addEventListener("click", function(e){
                inputDays.value = Number(inputSec.value)/24/60/60
                inputHours.value = Number(inputSec.value)/60/60
                inputMin.value = Number(inputSec.value)/60
            })
        }
    }
}