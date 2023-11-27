interface IIterator {
  hasNext(): boolean;
  next(): string;
}

interface Menu {
  createIterator(): IIterator;
}

class PancakeHouseIterator implements IIterator {
  private index = 0;

  constructor(private itemsList: string[]) {}

  hasNext(): boolean {
    return this.index < this.itemsList.length;
  }

  next(): string {
    const currentIndex = this.index;
    this.index++;

    console.log(this.itemsList[currentIndex]);
    return this.itemsList[currentIndex];
  }
}

class DinerIterator implements IIterator {
  private index = 0;

  constructor(private itemsList: Set<string>) {}

  hasNext(): boolean {
    return this.index < this.itemsList.size;
  }

  next(): string {
    const currentIndex = this.index;
    this.index++;

    console.log([...this.itemsList][currentIndex]);
    return [...this.itemsList][currentIndex];
  }
}

class PancakeHouseMenu implements Menu {
  constructor(public menuItems: string[]) {}

  createIterator(): IIterator {
    return new PancakeHouseIterator(this.menuItems);
  }
}

class DinerMenu implements Menu {
  constructor(public menuItems: Set<string>) {}

  createIterator(): IIterator {
    return new DinerIterator(this.menuItems);
  }
}

export class Cafe {
  pancakeHouseMenu?: PancakeHouseMenu;
  dinerMenu?: DinerMenu;

  constructor() {
    this.pancakeHouseMenu = new PancakeHouseMenu(['fried potato', 'fried rice', 'sausages']);
    this.dinerMenu = new DinerMenu(new Set<string>().add('corn').add('plum').add('apple').add('tomato'));
  }

  printMenu(menuList: Menu) {
    const iterator = menuList.createIterator();

    while(iterator.hasNext()) {
      iterator.next();
    }
  }
}
