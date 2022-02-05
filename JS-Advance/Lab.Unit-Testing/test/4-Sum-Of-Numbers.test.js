const expect = require("chai").expect;
const sum = require('../4-Sum-Of-Numbers');

describe("Test Sum functionality",()=>{
    it("Return correct sum",()=> {
        let input = [1,2,3]
        let result = sum(input)
        expect(result).to.equal(6)
    })
    it("Return correct sum",()=> {
        let input = [1,2,"3"]
        let result = sum(input)
        expect(result).to.equal(6)
    })
})
