import * as fs from 'node:fs';
import path from 'path';

interface IEventListener {
  update(data: unknown): void;
}

interface IPublisher {
  subscribe(eventType: string, listener: IEventListener): void;
  unsubscribe(eventType: string, listener: IEventListener): void;
  notify(eventType: string, data: unknown): void;
}

class EventManager implements IPublisher {
  private listeners = new Map<string, IEventListener[]>();

  subscribe(eventType: string, listener: IEventListener): void {
    const listeners = this.listeners.get(eventType);
    
    if (listeners) {
      this.listeners.set(eventType, [...listeners, listener]);
      return;
    }

    this.listeners.set(eventType, [listener]);
  }

  unsubscribe(eventType: string, listener: IEventListener): void {
    const listeners = this.listeners.get(eventType);

    if (listeners) {
      const strippedListeners = listeners.filter((item) => item !== listener);

      this.listeners.set(eventType, strippedListeners);
    }
  }

  notify(eventType: string, data: unknown): void {
    const listeners = this.listeners.get(eventType);

    listeners?.forEach((listener) => listener.update(data));
  }
}

export class Editor {
  eventManager = new EventManager();

  private fileName = 'test.txt';

  openFile(fileName: string): void {
    const filePath = path.join(__dirname, fileName);
    fs.writeFileSync(filePath, 'Hi from Editor!');
    const str = fs.readFileSync(filePath, 'utf8');

    this.eventManager.notify('openFile', str);
  }

  getFileSize(): void {
    const filePath = path.join(__dirname, this.fileName);
    
    fs.writeFileSync(filePath, 'Hi from Editor!');

    const str = fs.readFileSync(filePath, 'utf8');
    console.log(str);

    this.eventManager.notify('getFileSize', `${str.length} symbols`);
  }
}

export class LoggingListener implements IEventListener {
  private logFile?: string;
  private message?: string;

  constructor(
    fileName: string,
    message: string,
  ) {
    const filePath = path.join(__dirname, fileName);

    fs.writeFileSync(filePath, message);

    this.logFile = fs.readFileSync(filePath, 'utf8');;
    this.message = message;
  }

  update(fileSize: string): void {
    this.message = this.message?.replace('%s', this.logFile ?? '');

    console.log(`The file has been changed`, fileSize);
  }
}

export class EmailAlertsListener implements IEventListener {
  constructor(
    private email: string,
    private message: string,
  ) {}

  update(fileName: string): void {
    this.message = this.message.replace('%s', this.email);
    console.log(this.message);
  }
}

