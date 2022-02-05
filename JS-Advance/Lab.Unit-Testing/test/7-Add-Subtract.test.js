const expect = require("chai").expect;
const createCalculator = require('../7-Add-Subtract');

describe("Add-Subtract",()=>{
    it("If object hasOwnProp",()=>{
        let a = createCalculator()
        expect(a.hasOwnProperty('add')).to.equal(true)
        expect(a.hasOwnProperty('subtract')).to.equal(true)
        expect(a.hasOwnProperty('get')).to.equal(true)
    })
    it("If obj prop are fuctions",()=>{
        let a = createCalculator()
        expect(typeof a.add).to.equal("function")
        expect(typeof a.subtract).to.equal("function")
        expect(typeof a.get).to.equal("function")
    })
    it("If internal sum can be modified",()=>{
        let a = createCalculator()
        expect(a.value).to.equal(undefined)
    })
    it("If result is object",()=>{
        let a = createCalculator()
        expect(typeof a).to.equal('object')
    })
    it("If add work correctry",()=>{
        let a = createCalculator()
        expect(a.get()).to.equal(0)
        a.add(5)
        expect(a.get()).to.equal(5)
    })
    it("If subtract work correctry",()=>{
        let a = createCalculator()
        expect(a.get()).to.equal(0)
        a.subtract(5)
        expect(a.get()).to.equal(-5)
    })
    it("If and and subtract work correctry with parsing a number by string",()=>{
        let a = createCalculator()
        expect(a.get()).to.equal(0)
        a.add("5")
        expect(a.get()).to.equal(5)
        a.subtract('5')
        expect(a.get()).to.equal(0)
    })
    it("try input wrong format",()=>{
        let a = createCalculator()
        expect(a.get()).to.equal(0)
        a.add([5,5])
        expect(a.get()).to.NaN
    })


})