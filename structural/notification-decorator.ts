import * as fs from 'node:fs';
import path from 'path';

interface DataSource {
  writeData(data: Object): void;
  readData(): string;
}

class FileDataSource implements DataSource {
  constructor(private fileName: string) {
    const filePath = path.join(__dirname, fileName);
    fs.writeFileSync(filePath, `File has been created, ${new Date().toLocaleDateString()}`, { encoding:'utf8', flag:'w' });
  }

  writeData(data: Object): void {
    const fileData = this.readData();

    console.log(`File data from write file: ${fileData}`);

    const filePath = path.join(__dirname, this.fileName);
    fs.writeFileSync(filePath, fileData + JSON.stringify(data), { encoding:'utf8', flag:'w' });
  }

  readData(): string {
    const filePath = path.join(__dirname, this.fileName);
    const fileData = fs.readFileSync(filePath).toString();

    console.log(fileData);

    return fileData;
  }
}

class DataSourceDecorator implements DataSource {
  constructor(public wrapee: DataSource) {}

  writeData(data: Object): void {
    this.wrapee.writeData(data);
  }

  readData(): string {
    return this.wrapee.readData();
  }
}

class EncryptionDecorator extends DataSourceDecorator {
  constructor(public wrapee: DataSource) {
    super(wrapee);
  }

  writeData(data: Object): void {
    this.wrapee.writeData(data);
  }

  readData(): string {
    return this.wrapee.readData();
  }
}

class CompressionDecorator extends DataSourceDecorator {
  constructor(public wrapee: DataSource) {
    super(wrapee);
  }

  writeData(data: Object): void {
    this.wrapee.writeData(data);
  }

  readData(): string {
    return this.wrapee.readData();
  }
}

export class NotificationApp {
  source?: DataSource;

  dumbUsageExample(): void {
    this.source = new FileDataSource('dumb.txt');

    this.source.readData();

    this.source = new CompressionDecorator(this.source);

    this.source.writeData('  Add compressed data  ');

    this.source = new EncryptionDecorator(this.source);

    this.source.writeData('  Add encrypted data  ');

    this.source.readData();
  }
}