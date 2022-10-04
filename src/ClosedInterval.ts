class ClosedInterval {
  lowerEndPoint: number;
  upperEndPoint: number;

  constructor(lower: number, upper: number) {
    this.lowerEndPoint = lower;
    this.upperEndPoint = upper;
  }

  display() {
    return `[${this.lowerEndPoint},${this.upperEndPoint}]`;
  }

  contain(point: number): boolean {
    return this.lowerEndPoint <= point && point <= this.upperEndPoint;
  }
}

export { ClosedInterval };
