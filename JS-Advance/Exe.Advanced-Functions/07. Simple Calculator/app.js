function calculator() {
   // debugger
    return {
        init(selector1, selector2, resultSelector){
            this.s1Element = document.querySelector(selector1)
            this.s2Element = document.querySelector(selector2)
            this.resElement = document.querySelector(resultSelector)
        },
        add(){
            this.resElement.value = Number(this.s1Element.value) + Number(this.s2Element.value)

        },
        subtract(){
            this.resElement.value = Number(this.s1Element.value) - Number(this.s2Element.value)
        }
    }
}

const calculate = calculator (); 
calculate.init ('#num1', '#num2', '#result'); 



