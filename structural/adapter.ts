interface Duck {
  quack(): void;
  fly(): void;
}

export class RedHeadDuck implements Duck {
  quack(): void {
    console.log('I can "Quack!"');
  };

  fly(): void {
    console.log('I can Fly!');
  }
}

export class DuckSimulator {
  // static main<T extends { new (...args: unknown[]): Duck }>(duck: T): void {
  //   const duckInstance = new duck();
  static main(duckInstance: Duck): void {
    this.testDuck(duckInstance);
  }

  static testDuck(duck: Duck): void {
    duck.quack();
    duck.fly();
  }
}

interface Turkey {
  gobble(): void;
  fly(): void;
}

export class WildTurkey implements Turkey {
  gobble(): void {
    console.log('I can gobble!');
  };

  fly(): void {
    console.log('I can Fly!');
  }
}

export class TurkeyAdapter implements Duck {
  adaptee?: Turkey;

  setAdaptee(turkey: Turkey): void {
    this.adaptee = turkey;
  }

  quack(): void {
    this.adaptee?.fly();
  }

  fly(): void {
    for(let i = 0; i < 5; i++) {
      this.adaptee?.gobble();
    }
  }
}

interface Drone {
  beep(): void;
  spin_rotors(): void;
  take_off(): void;
}

export class SuperDrone implements Drone {
  beep(): void {
    console.log('Beep beep beep!');
  }

  spin_rotors(): void {
    console.log('Rotors are spinning!');
  }

  take_off(): void {
    console.log('Taking off.');  
  }
}

export class DroneAdapter implements Duck {
  adaptee?: Drone;

  setAdaptee(drone: Drone): void {
    this.adaptee = drone;
  }

  quack(): void {
    this.adaptee?.beep();
  }

  fly(): void {
    this.adaptee?.spin_rotors();
    this.adaptee?.take_off();
  }
}
