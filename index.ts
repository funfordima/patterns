import { MallardDuck, DecoyDuck } from './creational/strategy';

console.log('Hey! Let\'s begin!');

const duck = new MallardDuck();
duck.performFly();
duck.performQuack();
duck.swim();
duck.display();

const decoyDuck = new DecoyDuck();
decoyDuck.performFly();
decoyDuck.performQuack();
decoyDuck.swim();
decoyDuck.display();
