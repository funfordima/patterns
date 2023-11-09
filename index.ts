import { MallardDuck, DecoyDuck } from './behavioral/strategy';
import { CalculateHandler } from './behavioral/calculate-strategy';
import { TurkeyAdapter, WildTurkey, DuckSimulator, RedHeadDuck, DroneAdapter, SuperDrone } from './structural/adapter';
import { RoundPeg, RoundHole, SquarePeg, SquarePegAdapter } from './structural/shape-adapter';

console.log('Hey! Let\'s begin!');

// ----------------------------------------------------------------

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

// ----------------------------------------------------------------

// const calculateHandler = new CalculateHandler();
// console.log(calculateHandler.calculate(2, 3, 'addition'));
// console.log(calculateHandler.calculate(2, 3, 'subtraction'));
// console.log(calculateHandler.calculate(2, 3, 'multiplication'));

// ----------------------------------------------------------------

// const redHeadDuck = new RedHeadDuck();
// const wildTurkey = new WildTurkey();
// const turkeyAdapter = new TurkeyAdapter();
// const drone = new SuperDrone();
// const droneAdapter = new DroneAdapter();

// console.log(DuckSimulator.main(redHeadDuck));
// turkeyAdapter.setAdaptee(wildTurkey);
// console.log(DuckSimulator.main(turkeyAdapter));
// droneAdapter.setAdaptee(drone);
// console.log(DuckSimulator.main(droneAdapter));

// ----------------------------------------------------------------

const hole = new RoundHole(5);
const roundPeg = new RoundPeg(5);
hole.fits(roundPeg);

const small_sq_peg = new SquarePeg(5);
const large_sq_peg = new SquarePeg(10);
// hole.fits(small_sq_peg); won't compile as incompatible types

const small_sq_peg_adapter = new SquarePegAdapter(5, small_sq_peg);
const large_sq_peg_adapter = new SquarePegAdapter(10, large_sq_peg);
hole.fits(small_sq_peg_adapter);
hole.fits(large_sq_peg_adapter);
