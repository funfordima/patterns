interface IFlyBehavior {
  fly(): void;
}

interface IQuackBehavior {
  quack(): void;
}

class FlyWithWings implements IFlyBehavior {
  fly(): void {
    console.log('I can fly!');
  }
}

class FlyNoWay implements IFlyBehavior {
  fly(): void {
    console.log('I can\'t fly!');
  }
}

class Quack implements IQuackBehavior {
  quack(): void {
    console.log('I can "Quack!"');
  }
}

class Squeak implements IQuackBehavior {
  quack(): void {
    console.log('I can "Squeak!"');
  }
}

class SilentDuck implements IQuackBehavior {
  quack(): void {
    console.log('I\'m angry duck!');
  }
}

abstract class Duck {
  flyBehavior?: IFlyBehavior;
  quackBehavior?: IQuackBehavior;
  //or we can implement setters for fly and quack behavior

  abstract display(): void

  swim(): void {
    console.log('All ducks float, even decoys!');
  }

  performFly(): void {
    this.flyBehavior?.fly();
  }

  performQuack(): void {
    this.quackBehavior?.quack();
  }
}

export class MallardDuck extends Duck {
  constructor() {
    super();
    this.quackBehavior = new Quack();
    this.flyBehavior = new FlyWithWings();
  }

  display(): void {
    console.log('I\'m real Mallard duck!');
  }
}

export class DecoyDuck extends Duck {
  constructor() {
    super();
    this.quackBehavior = new SilentDuck();
    this.flyBehavior = new FlyNoWay();
  }

  display(): void {
    console.log('I\'m real Decoy duck!');
  }
}
