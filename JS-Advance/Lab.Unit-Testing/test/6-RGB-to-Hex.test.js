const expect = require("chai").expect;
const rgbToHexColor = require('../6-RGB-to-Hex');

describe('Convert RGB to hex', () => {
    it('"red", "green", "blue" = undefined', () => {
        expect(rgbToHexColor('red', 'green', 'blue')).to.be.undefined;
    });

    it('"-1", "255", "255" = undefined', () => {
        expect(rgbToHexColor(-1, 255, 255)).to.be.undefined;
    });

    it('255, 255, 255 = "#FFFFFF"', () => { // white
        expect(rgbToHexColor(255, 255, 255)).to.equal('#FFFFFF');
    });

    it('0, 0, 0 = "#000000"', () => { // white
        expect(rgbToHexColor(0, 0, 0)).to.equal('#000000');
    });

    it('94, 0, 255 = "#5E00FF"', () => {
        expect(rgbToHexColor(94, 0, 255)).to.equal('#5E00FF');
    });

    it('"255", 200, "36" = undefined', () => { // numbers passed as strings
        expect(rgbToHexColor('255', 200, '36')).to.be.undefined;
    });

    it('240, 36, 255 = "#F024FF"', () => {
        expect(rgbToHexColor(240, 36, 255)).to.equal('#F024FF');
    });

    it('256, 256, 256 = undefined', () => {
        expect(rgbToHexColor(256, 256, 256)).to.be.undefined;
    });

    it('255, 255 = undefined', () => {
        expect(rgbToHexColor(255, 255)).to.be.undefined;
    });
});