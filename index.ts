import { MallardDuck, DecoyDuck } from './behavioral/strategy';
import { CalculateHandler } from './behavioral/calculate-strategy';

console.log('Hey! Let\'s begin!');

// const duck = new MallardDuck();
// duck.performFly();
// duck.performQuack();
// duck.swim();
// duck.display();

// const decoyDuck = new DecoyDuck();
// decoyDuck.performFly();
// decoyDuck.performQuack();
// decoyDuck.swim();
// decoyDuck.display();

const calculateHandler = new CalculateHandler();
console.log(calculateHandler.calculate(2, 3, 'addition'));
console.log(calculateHandler.calculate(2, 3, 'subtraction'));
console.log(calculateHandler.calculate(2, 3, 'multiplication'));
