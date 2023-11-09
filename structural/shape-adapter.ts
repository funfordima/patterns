export class RoundPeg {
  constructor(public radius: number) {}

  getRadius(): number {
    return this.radius;
  }
}

export class RoundHole {
  constructor(public radius: number) {}

  getRadius(): number {
    return this.radius;
  }

  fits(peg: RoundPeg): boolean {
    const isFits = this.getRadius() >= peg.getRadius();
    console.log(`Is hole fits to the shape? - ${isFits}`);
    
    return isFits;
  }
}

export class SquarePeg {
  constructor(public width: number) {}

  getWidth(): number {
    return this.width;
  }
}

export class SquarePegAdapter extends RoundPeg {
  constructor(
    public width: number,
    private peg: SquarePeg,
  ) {
    super(width);
  }

  getRadius(): number {
    return this.peg.getWidth() * Math.sqrt(2) / 2;
  }
}
