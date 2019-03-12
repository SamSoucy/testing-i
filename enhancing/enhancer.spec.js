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

describe("succeed", () => {
    test("item's enhancement increases by 1", () => {
        expect(enhancer.succeed({
            name: "Iron Sword",
            durability: 80,
            enhancement: 0
        })).toEqual({
            name: "Iron Sword",
            durability: 80,
            enhancement: 1
        });
    });
});

describe("fail", () => {
    test("item's enhancement is less than 15, the durability of the item is decreased by 5", () => {
        expect(enhancer.fail({
            name: "Iron Sword",
            durability: 85,
            enhancement: 0
        })).toEqual({
            name: "Iron Sword",
            durability: 80,
            enhancement: 0
        });
    });
    test("item's enhancement is 15 or more, the durability of the item is decreased by 10", () => {
        expect(enhancer.fail({
            name: "Iron Sword",
            durability: 80,
            enhancement: 15
        })).toEqual({
            name: "Iron Sword",
            durability: 70,
            enhancement: 15
        });
    });
    test("item's enhancement level is greater than 16, the enhancement level decreases by 1", () => {
        expect(enhancer.fail({
            name: "Iron Sword",
            durability: 90,
            enhancement: 19
        })).toEqual({
            name: "Iron Sword",
            durability: 80,
            enhancement: 18
        });
    });
});








  
    