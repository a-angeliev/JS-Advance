function solve(name, population, treasury){
    let result = {
        name,
        population,
        treasury,
        taxRate : 10,
        collectTaxes(){
            this.treasury += this.population*this.taxRate
        },
        applyGrowth(percentage){
            let perc = Number(percentage)/100
            this.population *= perc +1
        },
        applyRecession(percentage){
            let perc = Number(percentage)/100
            this.treasury *= 1-perc
        }

    }
    return result


}

console.log(solve());