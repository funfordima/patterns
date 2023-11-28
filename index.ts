import { MallardDuck, DecoyDuck } from './behavioral/strategy';
import { CalculateHandler } from './behavioral/calculate-strategy';
import { TurkeyAdapter, WildTurkey, DuckSimulator, RedHeadDuck, DroneAdapter, SuperDrone } from './structural/adapter';
import { RoundPeg, RoundHole, SquarePeg, SquarePegAdapter } from './structural/shape-adapter';
import { WeatherStation, User, Logger, Alert } from './behavioral/observer';
import { Editor, EmailAlertsListener, LoggingListener } from './behavioral/event-observer';
import { StarbuzzCoffee } from './structural/decorator';
import { DiningFoodCafe } from './structural/pizza-decorator';
import { NotificationApp } from './structural/notification-decorator';
import { Cafe } from './behavioral/iterator';
import { NetworkApp } from './behavioral/network-iterator';

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

// const hole = new RoundHole(5);
// const roundPeg = new RoundPeg(5);
// hole.fits(roundPeg);

// const small_sq_peg = new SquarePeg(5);
// const large_sq_peg = new SquarePeg(10);
// // hole.fits(small_sq_peg); won't compile as incompatible types

// const small_sq_peg_adapter = new SquarePegAdapter(5, small_sq_peg);
// const large_sq_peg_adapter = new SquarePegAdapter(10, large_sq_peg);
// hole.fits(small_sq_peg_adapter);
// hole.fits(large_sq_peg_adapter);

// ----------------------------------------------------------------

// const weatherStation = new WeatherStation(30, 7, 750);
// const userObserver = new User(weatherStation);
// const loggerObserver = new Logger(weatherStation);
// const alertObserver = new Alert(weatherStation);

// weatherStation.registerObserver(userObserver);
// weatherStation.registerObserver(loggerObserver);
// weatherStation.registerObserver(alertObserver);

// weatherStation.notifyObservers();
// console.log('----- /n/n');

// weatherStation.removeObserver(userObserver);
// alertObserver.unsubscribe();

// weatherStation.notifyObservers();

// ----------------------------------------------------------------

// const editor = new Editor();
// const logger = new LoggingListener('log.txt', 'Someone has opened the file: %s');
// const emailAlerts = new EmailAlertsListener('admin@example.com', 'Someone has changed the file: %s');

// editor.eventManager.subscribe('openFile', emailAlerts);
// editor.eventManager.subscribe('getFileSize', logger);

// editor.getFileSize();
// editor.openFile('test.txt');

// ----------------------------------------------------------------

// const starbuzzCoffeeShop = new StarbuzzCoffee();
// starbuzzCoffeeShop.orderBeverage();

// const cafe = new DiningFoodCafe();
// cafe.orderThickPizza();
// cafe.orderThinPizza();

// ----------------------------------------------------------------

// new NotificationApp().dumbUsageExample();

// ----------------------------------------------------------------

// const cafe = new Cafe();
// cafe.printMenu(cafe.pancakeHouseMenu!);
// cafe.printMenu(cafe.dinerMenu!);

// ----------------------------------------------------------------

const networkApp = new NetworkApp('Facebook');
networkApp.sendSpamToFriends(1);
networkApp.sendSpamToCoworkers(1);

const notificationApp = new NetworkApp('Linkedin');
notificationApp.sendSpamToFriends(1);
notificationApp.sendSpamToCoworkers(1);

// ----------------------------------------------------------------

