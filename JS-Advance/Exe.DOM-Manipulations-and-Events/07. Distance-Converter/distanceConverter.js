function attachEventsListeners() {
    let fromElement = document.querySelector("#inputUnits");
    let toElement = document.querySelector("#outputUnits");
    let buttonElement = document.querySelector("#convert");
    let outputElement = document.querySelector("#outputDistance");

    buttonElement.addEventListener("click", function(e){
    let input = Number(document.querySelector("#inputDistance").value)

        console.log(input);
        if(fromElement.value == "km" && toElement.value == "m"){
            outputElement.value = input*1000;
        }else if(fromElement.value == "m" && toElement.value == "km"){
            outputElement.value = input/1000;
        }else if(fromElement.value == "km" && toElement.value == "cm"){
            outputElement.value = input*100000;
        }else if(fromElement.value == "cm" && toElement.value == "km"){
            outputElement.value = input/100000;
        }else if(fromElement.value == "km" && toElement.value == "mm"){
            outputElement.value = input*1000000;
        }else if(fromElement.value == "mm" && toElement.value == "km"){
            outputElement.value = input/1000000;
        }else if(fromElement.value == "km" && toElement.value == "mi"){
            outputElement.value = input*0.62137;
        }else if(fromElement.value == "mi" && toElement.value == "km"){
            outputElement.value = input/0.62137;
        }else if(fromElement.value == "km" && toElement.value == "yrd"){
            outputElement.value = input*1093.6;
        }else if(fromElement.value == "yrd" && toElement.value == "km"){
            outputElement.value = input/1093.6;
        }else if(fromElement.value == "km" && toElement.value == "ft"){
            outputElement.value = input*3280.8;
        }else if(fromElement.value == "ft" && toElement.value == "km"){
            outputElement.value = input/3280.8;
        }else if(fromElement.value == "km" && toElement.value == "in"){
            outputElement.value = input*0.39370;
        }else if(fromElement.value == "in" && toElement.value == "km"){
            outputElement.value = input/39370;
        }
        else if(fromElement.value == "m" && toElement.value == "cm"){
            outputElement.value = input*100;
        }else if(fromElement.value == "cm" && toElement.value == "m"){
            outputElement.value = input/100;
        }else if(fromElement.value == "m" && toElement.value == "mm"){
            outputElement.value = input*1000;
        }else if(fromElement.value == "mm" && toElement.value == "m"){
            outputElement.value = input/1000;
        }else if(fromElement.value == "m" && toElement.value == "mi"){
            outputElement.value = input*0.00062137;
        }else if(fromElement.value == "mi" && toElement.value == "m"){
            outputElement.value = input/0.00062137;
        }else if(fromElement.value == "m" && toElement.value == "yrd"){
            outputElement.value = input*1.0936;
        }else if(fromElement.value == "yrd" && toElement.value == "m"){
            outputElement.value = input/1.0936;
        }else if(fromElement.value == "m" && toElement.value == "ft"){
            outputElement.value = input*3.2808;
        }else if(fromElement.value == "ft" && toElement.value == "m"){
            outputElement.value = input/3.2808;
        }else if(fromElement.value == "m" && toElement.value == "in"){
            outputElement.value = input*39.370;
        }else if(fromElement.value == "in" && toElement.value == "m"){
            outputElement.value = input/39.370;
        }
        else if(fromElement.value == "cm" && toElement.value == "mm"){
            outputElement.value = input*10;
        }else if(fromElement.value == "mm" && toElement.value == "cm"){
            outputElement.value = input/10;
        }else if(fromElement.value == "cm" && toElement.value == "mi"){
            outputElement.value = input*0.0000062137;
        }else if(fromElement.value == "mi" && toElement.value == "cm"){
            outputElement.value = input/0.0000062137;
        }else if(fromElement.value == "cm" && toElement.value == "yrd"){
            outputElement.value = input*0.010936;
        }else if(fromElement.value == "yrd" && toElement.value == "cm"){
            outputElement.value = input/0.010936;
        }else if(fromElement.value == "cm" && toElement.value == "ft"){
            outputElement.value = input*0.032808;
        }else if(fromElement.value == "ft" && toElement.value == "cm"){
            outputElement.value = input/0.032808;
        }else if(fromElement.value == "cm" && toElement.value == "in"){
            outputElement.value = input*0.39370;
        }else if(fromElement.value == "in" && toElement.value == "cm"){
            outputElement.value = input/0.39370;
        }
        else if(fromElement.value == "mm" && toElement.value == "mi"){
            outputElement.value = input/1609344;
        }else if(fromElement.value == "mi" && toElement.value == "mm"){
            outputElement.value = input*1609344;
        }else if(fromElement.value == "mm" && toElement.value == "yrd"){
            outputElement.value = input*0.001094;
        }else if(fromElement.value == "yrd" && toElement.value == "mm"){
            outputElement.value = input/0.001094;
        }else if(fromElement.value == "mm" && toElement.value == "ft"){
            outputElement.value = input*0.003281;
        }else if(fromElement.value == "ft" && toElement.value == "mm"){
            outputElement.value = input/0.003281;
        }else if(fromElement.value == "mm" && toElement.value == "in"){
            outputElement.value = input/25.4;
        }else if(fromElement.value == "in" && toElement.value == "mm"){
            outputElement.value = input*25.4;
        }
        else if(fromElement.value == "mi" && toElement.value == "yrd"){
            outputElement.value = input*1760;
        }else if(fromElement.value == "yrd" && toElement.value == "mi"){
            outputElement.value = input*0.00056818;
        }else if(fromElement.value == "mi" && toElement.value == "ft"){
            outputElement.value = input*5280;
        }else if(fromElement.value == "ft" && toElement.value == "mi"){
            outputElement.value = input*0.00018939;
        }else if(fromElement.value == "mi" && toElement.value == "in"){
            outputElement.value = input*63360;
        }else if(fromElement.value == "in" && toElement.value == "mi"){
            outputElement.value = input*0.000015783;
        }
        else if(fromElement.value == "yrd" && toElement.value == "ft"){
            outputElement.value = input*3;
        }else if(fromElement.value == "ft" && toElement.value == "yrd"){
            outputElement.value = input*0.33333;
        }else if(fromElement.value == "yrd" && toElement.value == "in"){
            outputElement.value = input*36;
        }else if(fromElement.value == "in" && toElement.value == "yrd"){
            outputElement.value = input*0.027778;
        }
        else if(fromElement.value == "ft" && toElement.value == "in"){
            outputElement.value = input*12;
        }else if(fromElement.value == "in" && toElement.value == "ft"){
            outputElement.value = input*0.083333;
        }else{
            outputElement.value = input;
        }
    })
}