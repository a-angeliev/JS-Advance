function rectangle(w,h,c){
    let obj = {
        width: w,
        height: h,
        color: c.charAt(0).toUpperCase() + c.slice(1),
        calcArea: function(){
            return this.width* this.height
        }
    }
    return obj
}

let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
