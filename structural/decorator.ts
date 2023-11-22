abstract class Beverage {
  description = 'Unknown beverage';

  getDescription(): string {
    return this.description;
  }

  abstract cost(): number;
}

class DarkRoast extends Beverage {
  description = 'Dark Roast coffee'

  cost(): number {
    return 0.99;
  }
}

abstract class CondimentDecorator extends Beverage {
  abstract getDescription(): string;
}

export class Whip extends CondimentDecorator {
  constructor(private beverage: Beverage) {
    super();
  }

  getDescription(): string {
    return this.beverage.getDescription() + ' + Whip';
  }

  cost(): number {
    return this.beverage.cost() + 0.10;
  }
}

export class Milk extends CondimentDecorator {
  constructor(private beverage: Beverage) {
    super();
  }

  getDescription(): string {
    return this.beverage.getDescription() + ' + Milk';
  }

  cost(): number {
    return this.beverage.cost() + 0.21;
  }
}

export class Mocha extends CondimentDecorator {
  constructor(private beverage: Beverage) {
    super();
  }

  getDescription(): string {
    return this.beverage.getDescription() + ' + Mocha';
  }

  cost(): number {
    return this.beverage.cost() + 0.5;
  }
}

export class StarbuzzCoffee {
  orderBeverage(): void {
    const beverage = new DarkRoast();
    const beverageWithMilk = new Milk(beverage);
    const beverageWithMocha = new Mocha(beverageWithMilk);
    const beverageWithWhip = new Whip(beverageWithMocha);

    console.log(`Hey! Here is your coffee: ${beverageWithWhip.getDescription()}! ${beverageWithWhip.cost()}$`);
  }
}
