function extract(content) {
    let string = document.getElementById(content).textContent
    console.log(string);
    let result = "";
    let resultArray = [];
    let flag = false;

    for(let el of string){
        if(el == "("){
            flag = true;
        }else if(el == ")"){
            flag = false;
            resultArray.push(result);
            result = "";
        }else if(flag == true){
            result += el;
        }
    }
    return resultArray.join("; ");
}