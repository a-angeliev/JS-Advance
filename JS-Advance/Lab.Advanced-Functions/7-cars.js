function solve(input) {
    function a(){
        let obj = []
        ob = {}
        return {
            create(name){
                eval(`${name} = {}`)
                obj.push(name)
                console.log(c1);
            },
            createIn(name, inName){
                eval(`${name} = Object.create(${inName})`)
                obj.push(name)
            },
            print(){
                console.log(obj);
                console.log(c1===c2);
            }
        }
    }
    let fun = a()
    input.forEach(x => {
        [com, value, value1] = x.split(" ")
        if(com == "create"){
            fun.create(value)
        }else if(com == "set"){
            fun.createIn(value, value1)
        }
    })
    fun.print()
    c1.color = "red"
    c2.model = "new"
    console.log(c1);
    console.log(c2);
}

solve(['create c1',
'set c2 c1',]
)

