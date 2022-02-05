const expect = require("chai").expect;
const lookupChar = require('../3-Char-Lookup');

describe("test 3-Char-Lookup",()=>{
    it("check if input is not correct type", ()=>{
        expect(lookupChar(1, [])).to.equal(undefined)
        expect(lookupChar([1], {})).to.equal(undefined)
        expect(lookupChar({}, {})).to.equal(undefined)
        expect(lookupChar(NaN, NaN)).to.equal(undefined)
        expect(lookupChar("NaN", "string")).to.equal(undefined)
        expect(lookupChar(undefined, undefined)).to.equal(undefined)
        expect(lookupChar(1, 1)).to.equal(undefined)
        expect(lookupChar(1, 1.5)).to.equal(undefined)
        expect(lookupChar("1", 1.5)).to.equal(undefined)
    })
    it("check if index is out of range", ()=>{
        expect(lookupChar("Hello", -1)).to.equal("Incorrect index")
        expect(lookupChar("Hello", 5)).to.equal("Incorrect index")
        expect(lookupChar("", 0)).to.equal("Incorrect index")
    })
    it("check if input is correct", ()=>{
        expect(lookupChar("Hello", 0)).to.equal("H")
        expect(lookupChar("Hello", 4)).to.equal("o")
        
    })
})