import sum from '../index'


describe("check if sum function works", function() {
    it("return 5", function() {
        expect(sum(2,3)).toEqual(5)
    })
    it("return 13", function() {
        expect(sum(10,3)).toEqual(13)
    })
    it("if anything but a number is entered, return an alert", function() {
        expect(() => sum(2,"3" as any)).toThrowError("Invalid input!")
    })
})
