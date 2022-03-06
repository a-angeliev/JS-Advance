let flowerShop = require("./flowerShop.js")
let expect = require("chai").expect

describe("Tests …", function() {
  describe("calcPriceOfFlowers …", function() {
      it("correct inputs", function() {
        expect(flowerShop.calcPriceOfFlowers("cvete", 1, 5)).to.equal(`You need $5.00 to buy cvete!`)
        expect(flowerShop.calcPriceOfFlowers("", 1, 2)).to.equal(`You need $2.00 to buy !`)
        expect(flowerShop.calcPriceOfFlowers("cvete", -1, 1)).to.equal(`You need $-1.00 to buy cvete!`)
      });
      it("incocret inputs", function() {
        expect(function(){flowerShop.calcPriceOfFlowers("cvete", 1.4, 5)}).to.throw('Invalid input!')
        expect(function(){flowerShop.calcPriceOfFlowers("cvete", "1", 5)}).to.throw('Invalid input!')
        expect(function(){flowerShop.calcPriceOfFlowers("cvete", 1.4, 5)}).to.throw('Invalid input!')
        expect(function(){flowerShop.calcPriceOfFlowers("cvete", 1.4, "5")}).to.throw('Invalid input!')
        expect(function(){flowerShop.calcPriceOfFlowers("cvete",[5], 5)}).to.throw('Invalid input!')
        expect(function(){flowerShop.calcPriceOfFlowers("cvete",[5])}).to.throw('Invalid input!')
      });
   });
  describe("checkFlowersAvailable …", function() {
    it("correct inputs", function() {
      expect(flowerShop.checkFlowersAvailable("cvete", ["cvete", '1'])).to.equal(`The cvete are available!`)
      expect(flowerShop.checkFlowersAvailable("1", ["cvete", '1'])).to.equal(`The 1 are available!`)
      expect(flowerShop.checkFlowersAvailable("", ["cvete", ''])).to.equal(`The  are available!`)
    });
    it("incorrect inputs", function() {
      expect(flowerShop.checkFlowersAvailable("cvete", ['1'])).to.equal(`The cvete are sold! You need to purchase more!`)
      expect(flowerShop.checkFlowersAvailable("cvete", [])).to.equal(`The cvete are sold! You need to purchase more!`)
      expect(flowerShop.checkFlowersAvailable("", ['1'])).to.equal(`The  are sold! You need to purchase more!`)
    });
  })

  describe("•	sellFlowers …", function() {
    it("correct inputs", function() {
      expect(flowerShop.sellFlowers(['1', '2', '3'],2)).to.equal('1 / 2')
      expect(flowerShop.sellFlowers(['1', '2', '3'],0)).to.equal('2 / 3')
      expect(flowerShop.sellFlowers(['1', '2', '3'],1)).to.equal('1 / 3')
     });
    it("incorrect inputs", function() {
      expect(function(){flowerShop.sellFlowers("cvete", 5)}).to.throw('Invalid input!')
      expect(function(){flowerShop.sellFlowers(["cvete"], "0")}).to.throw('Invalid input!')
      expect(function(){flowerShop.sellFlowers(["cvete", "cvete2"], 40)}).to.throw('Invalid input!')
      expect(function(){flowerShop.sellFlowers(["cvete", "cvete2"], -1)}).to.throw('Invalid input!')
    });
  })
});
