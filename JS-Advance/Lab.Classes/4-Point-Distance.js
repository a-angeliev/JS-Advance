class Point{
    constructor(x,y){
        this.x = x
        this.y = y
    }

    static distance(obj1, obj2){
        let a = obj1.x - obj2.x
        let b = obj1.y - obj2.y
        let result = Math.sqrt(a**2 + b**2)
        return result 
    }
}