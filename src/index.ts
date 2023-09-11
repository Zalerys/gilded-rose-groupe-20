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
  items: Item[];

  constructor(items: Item[] = []) {
    this.items = items;
  }

  updateQuality() {
    for (const item of this.items) {
      this.updateItemQuality(item);
    }
    return this.items;
  }

  private updateItemQuality(item: Item) {
    switch (item.name) {
      case "Aged Brie":
        this.updateAgedBrie(item);
        break;
      case "Backstage passes to a TAFKAL80ETC concert":
        this.updateBackstagePasses(item);
        break;
      case "Sulfuras, Hand of Ragnaros":
        break;
      default:
        this.updateRegularItem(item);
    }
  }

  private updateAgedBrie(item: Item) {
    item.sellIn--;
    if (item.quality < 50) {
      item.quality++;
    }
    if (item.sellIn < 0 && item.quality < 50) {
      item.quality++;
    }
  }

  private updateBackstagePasses(item: Item) {
    item.sellIn--;
    if (item.sellIn < 0) {
      item.quality = 0;
    } else if (item.sellIn < 5) {
      item.quality += 3;
    } else if (item.sellIn < 10) {
      item.quality += 2;
    } else {
      item.quality++;
    }
    if (item.quality > 50) {
      item.quality = 50;
    }
  }

  private updateRegularItem(item: Item) {
    item.sellIn--;
    if (item.quality > 0) {
      item.quality--;
      if (item.sellIn < 0 && item.quality > 0) {
        item.quality--;
      }
    }
  }
}
