interface IStrategy {
  strategyName: string;
  execute(a: number, b: number): number;
} 

class AddStrategy implements IStrategy {
  strategyName = 'sum';

  execute(a: number, b: number): number {
    console.log('Sum result:');
    return a + b;
  }
}

class SubtractStrategy implements IStrategy {
  strategyName = 'subtraction';

  execute(a: number, b: number): number {
    console.log('Subtract result:');
    return a - b;
  }
}

class MultiplyStrategy implements IStrategy {
  strategyName = 'multiplication';

  execute(a: number, b: number): number {
    console.log('Multiply result:');
    return a * b;
  }
}

class Context {
  private strategy?: IStrategy;

  setStrategy(strategy: IStrategy): void {
    this.strategy = strategy;
  }

  executeStrategy(a: number, b: number): number | undefined {
    return this.strategy?.execute(a, b);
  }

  displayStrategy(): void {
    console.log(`Current strategy is ${this.strategy?.strategyName}`);
  }
}

export class CalculateHandler {
  context?: Context;

  constructor() {
    this.context = new Context();
  }

  calculate(a: number, b: number, action: 'addition' | 'subtraction' | 'multiplication'): number | undefined {
    switch(action) {
      case 'addition': {
        this.context?.setStrategy(new AddStrategy());
        break;
      }

      case 'subtraction': {
        this.context?.setStrategy(new SubtractStrategy());
        break;
      }

      case 'multiplication': {
        this.context?.setStrategy(new MultiplyStrategy());
        break;
      }

      default: {
        throw Error('Strategy is not defined.');
      }
    }

    return this.context?.executeStrategy(a, b);
  }
}
