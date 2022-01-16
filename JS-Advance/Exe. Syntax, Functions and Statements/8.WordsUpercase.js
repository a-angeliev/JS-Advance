function upperCase(string){
    let array = [];
    let currenWord = ""
    let map = [",",".","!","?"," ","_", "-","\""]
    for(const el of string){
        if(map.includes(el)){
            if(currenWord !== ""){
                array.push(currenWord)
                currenWord = ""
            }
        }else{currenWord += el
        }
    }
    if(currenWord !== ""){
        array.push(currenWord)
    }
        console.log(array.join(", ").toUpperCase())
}
upperCase('        Functions -     in JS can be " nested, i.e. hold other functions           ')
upperCase('Hi, how are you?')
