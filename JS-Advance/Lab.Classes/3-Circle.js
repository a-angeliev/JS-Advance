class Circle{
    constructor(radius){
        this.radius = radius
        this._diameter = radius * 2
    }

    get diameter(){
        return this._diameter
    }

    set diameter(value){
        this._diameter = value
        this.radius = value /2 
    }

    get area(){
        return Math.PI * this.radius **2 
    }
}

let a = new Circle(5)
a.diameter = 5
console.log(a.diameter);
console.log(a);