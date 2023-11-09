interface IObserver {
  update(): void;
}

interface ISubject {
  registerObserver(observer: IObserver): void;
  removeObserver(observer: IObserver): void;
  notifyObservers(): void;
}

export class WeatherStation implements ISubject {
  constructor(
    public temperature: number,
    public windSpeed: number,
    public pressure: number,
    private observers: IObserver[] = [],
  ) {}

  registerObserver(observer: IObserver): void {
    this.observers.push(observer);
  }

  removeObserver(observer: IObserver): void {
    this.observers = this.observers.filter((item) => item !== observer);
  }

  notifyObservers(): void {
    this.observers.forEach((item) => item.update());
  }
}

export class User implements IObserver {
  constructor(private weatherStation: WeatherStation) {}

  update(): void {
    console.log('Update user');

    console.log('Pressure: ', this.weatherStation.pressure);
    console.log('Temperature: ', this.weatherStation.temperature);
    console.log('WindSpeed: ', this.weatherStation.windSpeed);
  }

  display(): void {
    console.log('Display user');
  }

  private unsubscribe(): void {
    this.weatherStation.removeObserver(this);
  }
}

export class Logger implements IObserver {
  constructor(private weatherStation: WeatherStation) {}

  update(): void {
    console.log('Update logger');
    
    console.log('Pressure: ', this.weatherStation.pressure);
    console.log('Temperature: ', this.weatherStation.temperature);
    console.log('WindSpeed: ', this.weatherStation.windSpeed);
  }

  log(): void {
    console.log('Log data');
  }

  private unsubscribe(): void {
    this.weatherStation.removeObserver(this);
  }
}

export class Alert implements IObserver {
  constructor(private weatherStation: WeatherStation) {}

  update(): void {
    console.log('Update alert');

    console.log('Pressure: ', this.weatherStation.pressure);
    console.log('Temperature: ', this.weatherStation.temperature);
    console.log('WindSpeed: ', this.weatherStation.windSpeed);
  }

  alert(): void {
    console.log('Alert');
  }

  unsubscribe(): void {
    this.weatherStation.removeObserver(this);
  }
}


