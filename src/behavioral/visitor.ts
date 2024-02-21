interface Shape {
	accept(visitor: ShapeVisitor): void;
}

class Circle implements Shape {
	radius: number;

	constructor(radius: number) {
		this.radius = radius;
	}

	accept(visitor: ShapeVisitor): void {
		visitor.visitCircle(this);
	}
}

class Square implements Shape {
	sideLength: number

	constructor(sideLength: number) {
		this.sideLength = sideLength;
	}

	accept(visitor: ShapeVisitor): void {
		visitor.visitSquare(this);
	}

}

interface ShapeVisitor {
	visitCircle(circle: Circle): void;
	visitSquare(square: Square): void;

}

class AreaVisitor implements ShapeVisitor {

	totalArea: number = 0;

	visitCircle(circle: Circle): void {
		const area = Math.PI * circle.radius * circle.radius;
		this.totalArea += area;
	}

	visitSquare(square: Square): void {
		const area = square.sideLength * square.sideLength;
		this.totalArea += area;
	}
}

const shapes: Shape[] = [new Circle(5), new Square(4)];

const areaVisitor = new AreaVisitor();

for (const shape of shapes) {
	shape.accept(areaVisitor);
}

console.log("Total area:", areaVisitor.totalArea);
