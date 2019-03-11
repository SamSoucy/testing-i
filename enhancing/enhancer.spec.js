const enhancer = require("./enhancer.js");



describe("repair", () => {
    test("durability restored to 100", () => {
        expect(enhancer.repair({
            name: "Iron Sword",
            durability: 80,
            enhancement: 20
        })).toEqual({
            name: "Iron Sword",
            durability: 100,
            enhancement: 20
        });
    });
}); 
  
    