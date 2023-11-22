abstract class Pizza {
  description = 'Standard pizza with pepper and tomatoes';

  getDescription(): string {
    return this.description;
  }

  abstract cost(): number;
}

class ThinCrustPizza extends Pizza {
  description = 'Thin crust pizza with pepper and tomatoes';

  cost(): number {
    return 2.1;
  }
}

class ThickCrustPizza extends Pizza {
  description = 'Thick crust pizza with pepper and tomatoes';

  cost(): number {
    return 1.8;
  }
}

abstract class CondimentDecorator extends Pizza {
  abstract getDescription(): string;
}

export class Cheese extends CondimentDecorator {
  constructor(private pizza: Pizza) {
    super();
  }

  getDescription(): string {
    return this.pizza.getDescription() + ' + Cheese';
  }

  cost(): number {
    return this.pizza.cost() + 0.4;
  }
}

export class Olives extends CondimentDecorator {
  constructor(private pizza: Pizza) {
    super();
  }

  getDescription(): string {
    return this.pizza.getDescription() + ' + Olives';
  }

  cost(): number {
    return this.pizza.cost() + 0.25;
  }
}

export class Meat extends CondimentDecorator {
  constructor(private pizza: Pizza) {
    super();
  }

  getDescription(): string {
    return this.pizza.getDescription() + ' + Meat';
  }

  cost(): number {
    return this.pizza.cost() + 0.7;
  }
}

export class DiningFoodCafe {
  orderThinPizza(): void {
    let pizza = new ThinCrustPizza();

    pizza = new Meat(pizza);
    pizza = new Cheese(pizza);

    console.log(`Your order is ready: ${pizza.getDescription()} $ ${pizza.cost()}`);
  }

  orderThickPizza(): void {
    let pizza = new ThickCrustPizza();

    pizza = new Olives(pizza);
    pizza = new Cheese(pizza);

    console.log(`Your order is ready: ${pizza.getDescription()} $ ${pizza.cost()}`);
  }
}
