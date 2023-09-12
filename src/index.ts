export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name: string, sellIn: number, quality: number) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class GildedRose {
  items: Array<Item>;

  constructor(items: Array<Item> = []) {
    this.items = items;
  }

  updateQuality() {
    for (const item of this.items) {
      if (item.name !== "Sulfuras, Hand of Ragnaros") {
        item.sellIn--;

        switch (item.name) {
          case "Aged Brie":
            this.updateAgedBrie(item);
            break;
          case "Backstage passes to a TAFKAL80ETC concert":
            this.updateBackstagePasses(item);
            break;
          default:
            this.updateRegularItem(item);
            break;
        }

        // Ensure quality is never negative
        if (item.quality < 0) {
          item.quality = 0;
        }

        // Ensure quality is never more than 50
        if (item.quality > 50) {
          item.quality = 50;
        }
      }
    }

    return this.items;
  }

  private updateAgedBrie(item: Item) {
    if (item.quality < 50) {
      item.quality++;
    }
    if (item.sellIn < 0 && item.quality < 50) {
      item.quality++;
    }
  }

  private updateBackstagePasses(item: Item) {
    if (item.sellIn < 0) {
      item.quality = 0;
    } else if (item.sellIn <= 5) {
      item.quality += 3;
    } else if (item.sellIn <= 10) {
      item.quality += 2;
    } else {
      item.quality++;
    }
  }

  private updateRegularItem(item: Item) {
    if (item.quality > 0) {
      if (item.sellIn < 0) {
        item.quality -= 2;
      } else {
        item.quality--;
      }
    }
  }
}
