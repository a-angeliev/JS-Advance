const expect = require("chai").expect;
const isSymmetric = require('../5-Check-for-Symmetry');

describe("Test", ()=>{
    it("Check if input is array", ()=>{
        expect(isSymmetric(7)).to.equal(false)     
    })
    it("Check if input is array", ()=>{
        expect(isSymmetric(function(){})).to.equal(false)     
    })
    it("Check if input is array", ()=>{
        expect(isSymmetric("sfas")).to.equal(false)       
    })
    it("Check input for symmetryc", ()=>{
        expect(isSymmetric([5,5,5,5])).to.equal(true)
    })
    it("Check input for symmetryc", ()=>{
        expect(isSymmetric(['5,2,4','5,2,4'])).to.equal(true)
    })
    it("Check input for symmetryc", ()=>{
        expect(isSymmetric([])).to.equal(true)
    })
    it("Check input for symmetryc", ()=>{
        expect(isSymmetric(['5,2,4','5,2,4','5,2,4'])).to.equal(true)
    })
    it("Check input for symmetryc", ()=>{
        expect(isSymmetric(undefined)).to.equal(false)
    })
    it("Check input for symmetryc", ()=>{
        expect(isSymmetric(NaN)).to.equal(false)
    })
    it("Check input for symmetryc", ()=>{
        expect(isSymmetric([5,2,4])).to.equal(false)
    })
    it("Check input for symmetryc", ()=>{
        expect(isSymmetric({})).to.equal(false)
    })
    it("Check input for symmetryc", ()=>{
        expect(isSymmetric([undefined,undefined,undefined,undefined])).to.equal(true)
    })
    it("Check input for symmetryc", ()=>{
        expect(isSymmetric([{},{},{},{}])).to.equal(true)
    })
    it("Check input for symmetryc", ()=>{
        expect(isSymmetric([[],[]])).to.equal(true)
    })
})