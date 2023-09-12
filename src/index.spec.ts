import { GildedRose, Item } from ".";

describe("updateQuality", () => {
  it("should decrease regular item quality by 1 before sellIn date", () => {
    const gildedRose = new GildedRose([new Item("Regular Item", 10, 10)]);
    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).toBe(9);
  });

  it("should increase Aged Brie quality by 1 before sellIn date", () => {
    const gildedRose = new GildedRose([new Item("Aged Brie", 10, 10)]);
    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).toBe(11);
  });

  it("should not change Sulfuras quality and sellIn", () => {
    const gildedRose = new GildedRose([new Item("Sulfuras, Hand of Ragnaros", 10, 10)]);
    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).toBe(10);
    expect(gildedRose.items[0].sellIn).toBe(10);
  });

  it("should set quality to 0 if it becomes negative", () => {
    const gildedRose = new GildedRose([new Item("Regular Item", 0, 0)]);
    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).toBe(0);
  });

  it("should set quality to 50 if it becomes more than 50", () => {
    const gildedRose = new GildedRose([new Item("Aged Brie", 10, 50)]);
    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).toBe(50);
  });
});
