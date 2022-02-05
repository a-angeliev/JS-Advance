const expect = require("chai").expect;
const isOddOrEven = require('../2-Even-or-Odd');

describe("check 2-Even-or-Odd", ()=>{
    it("check input is string",()=>{
        expect(isOddOrEven(1)).to.equal(undefined)
        expect(isOddOrEven([])).to.equal(undefined)
        expect(isOddOrEven({})).to.equal(undefined)
        expect(isOddOrEven(undefined)).to.equal(undefined)
        expect(isOddOrEven(NaN)).to.equal(undefined)
    })
    it("check inpot is odd", ()=>{
        expect(isOddOrEven("Hello")).to.equal("odd")
    })
    it("check inpot is even", ()=>{
        expect(isOddOrEven("Hi")).to.equal("even")
    })
    it("check inpot is even", ()=>{
        expect(isOddOrEven("")).to.equal("even")
    })
})