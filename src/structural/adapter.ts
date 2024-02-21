interface Peg {
	getRadius(): number;
}

class RoundPeg implements Peg {
	private radius: number;

	constructor(radius: number) {
		this.radius = radius;
	}

	getRadius() {
		return this.radius;
	}
}


class CircleHole {
	private radius: number;

	constructor(radius: number) {
		this.radius = radius;
	}

	fits(peg: Peg): boolean {
		return peg.getRadius() <= this.radius;
	}

}



class SquarePegAdapter implements Peg {
	private peg: SquarePeg;

	constructor(peg: SquarePeg) {
		this.peg = peg;
	}

	getRadius(): number {
		return this.peg.getWidth() * Math.SQRT2
	}
}


class SquarePeg {
	private width: number;

	constructor(width: number) {
		this.width = width;
	}

	getWidth(): number {
		return this.width;
	}

}


const circleHole = new CircleHole(10);



const circlePeg = new RoundPeg(10);
const squarePeg = new SquarePeg(7);
const squarePegAdpater = new SquarePegAdapter(squarePeg);


console.log(circleHole.fits(circlePeg));
console.log(circleHole.fits(squarePegAdpater));