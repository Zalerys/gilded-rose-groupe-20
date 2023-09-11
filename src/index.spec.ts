import { GildedRose, Item } from ".";

describe("updateQuality", () => {
  it("should decrease regular item quality by 1 before sellIn date", () => {
    const gildedRose = new GildedRose([new Item("Regular Item", 5, 10)]);
    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).toBe(9);
  });

  it("should increase Aged Brie quality by 1 before sellIn date", () => {
    const gildedRose = new GildedRose([new Item("Aged Brie", 5, 10)]);
    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).toBe(11);
  });

  it("should increase Backstage passes quality by 1 before 11 days of sellIn date", () => {
    const gildedRose = new GildedRose([new Item("Backstage passes to a TAFKAL80ETC concert", 15, 10)]);
    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).toBe(11);
  });

  it("should increase Backstage passes quality by 3 before sellIn date", () => {
    const gildedRose = new GildedRose([new Item("Backstage passes to a TAFKAL80ETC concert", 5, 10)]);
    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).toBe(13);
  });

  it("should not decrease item quality below 0", () => {
    const gildedRose = new GildedRose([new Item("Regular Item", 5, 0)]);
    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).toBe(0);
  });
});
