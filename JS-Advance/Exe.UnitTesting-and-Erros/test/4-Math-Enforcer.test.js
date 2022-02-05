const expect = require("chai").expect;
const mathEnforcer = require('../4-Math-Enforcer');

describe("mathEnforcer",()=>{
    it("should retunr correct result with a non-number param",()=>{
        expect(mathEnforcer.addFive("string")).to.equal(undefined)
        expect(mathEnforcer.addFive()).to.equal(undefined)
        expect(mathEnforcer.addFive({})).to.equal(undefined)
        expect(mathEnforcer.addFive([])).to.equal(undefined)
        expect(mathEnforcer.addFive("1")).to.equal(undefined)
        expect(mathEnforcer.addFive(undefined)).to.equal(undefined)
        expect(mathEnforcer.addFive(1)).to.equal(6)
        expect(mathEnforcer.addFive(-5)).to.equal(0)
        expect(mathEnforcer.addFive(1.5)).to.equal(6.5)
        expect(mathEnforcer.addFive(0)).to.equal(5)
    })
    it("should retunr correct result with a non-number parameter",()=>{
        expect(mathEnforcer.subtractTen("string")).to.equal(undefined)
        expect(mathEnforcer.subtractTen()).to.equal(undefined)
        expect(mathEnforcer.subtractTen({})).to.equal(undefined)
        expect(mathEnforcer.subtractTen([])).to.equal(undefined)
        expect(mathEnforcer.subtractTen("1")).to.equal(undefined)
        expect(mathEnforcer.subtractTen(undefined)).to.equal(undefined)
        expect(mathEnforcer.subtractTen(1)).to.equal(-9)
        expect(mathEnforcer.subtractTen(-10)).to.equal(-20)
        expect(mathEnforcer.subtractTen(1.5)).to.equal(-8.5)
        expect(mathEnforcer.subtractTen(0)).to.equal(-10)

    })
    it("should retunr correct result with a non-number parameter",()=>{
        expect(mathEnforcer.sum()).to.equal(undefined)
        expect(mathEnforcer.sum({},{})).to.equal(undefined)
        expect(mathEnforcer.sum([],[])).to.equal(undefined)
        expect(mathEnforcer.sum("1","2")).to.equal(undefined)
        expect(mathEnforcer.sum(undefined,undefined)).to.equal(undefined)
        expect(mathEnforcer.sum(1,2)).to.equal(3)
        expect(mathEnforcer.sum(1.5,1.5)).to.equal(3)
        expect(mathEnforcer.sum(-1.5,-1.5)).to.equal(-3)
        expect(mathEnforcer.sum(-1.5,1.5)).to.equal(0)
        expect(mathEnforcer.sum(1.5,1)).to.equal(2.5)
        expect(mathEnforcer.sum(1.5,0)).to.equal(1.5)
        expect(mathEnforcer.sum(0,0)).to.equal(0)
        expect(mathEnforcer.sum(0,'2')).to.equal(undefined)
        expect(mathEnforcer.sum("2",2)).to.equal(undefined)



    })
})